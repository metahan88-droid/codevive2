# GitHub Pages 배포 가이드

## 📋 배포 준비

### 1단계: 프로젝트 빌드

터미널에서 다음 명령어를 실행합니다:

```bash
npm run build
```

이 명령어는 `build` 폴더에 최적화된 파일들을 생성합니다.

### 2단계: GitHub 저장소 생성

1. [GitHub](https://github.com)에 로그인합니다
2. 새 저장소(Repository)를 만듭니다
   - 저장소 이름: `vive-coding-portfolio` (원하는 이름)
   - Public으로 설정
   - README 추가 **체크 안 함**

### 3단계: 코드 업로드

터미널에서 다음 명령어를 실행합니다:

```bash
# Git 초기화 (처음 한 번만)
git init
git add .
git commit -m "Initial commit"

# GitHub 저장소 연결 (YOUR-USERNAME과 YOUR-REPO를 실제 값으로 변경)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### 4단계: GitHub Pages 설정

#### 방법 1: 빌드 폴더만 배포 (권장)

1. GitHub 저장소 페이지에서 **Settings** 탭 클릭
2. 왼쪽 메뉴에서 **Pages** 클릭
3. **Source**를 **Deploy from a branch**로 설정
4. **Branch**를 **main** 선택, 폴더를 **/build** 선택
5. **Save** 클릭

> ⚠️ GitHub Pages 설정 화면에 `/build` 옵션이 보이지 않으면, GitHub가 아직 정적 산출물을 인식하지 못한 상태입니다. 이 경우 **방법 2**(GitHub Actions)를 사용하세요.

#### 방법 2: GitHub Actions 사용 (자동 빌드)

1. `.github/workflows/deploy.yml` 파일을 생성합니다:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: "npm"

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: build

  deploy:
    needs: build-and-deploy
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

2. 코드를 푸시하면 자동으로 빌드 및 배포됩니다. GitHub Pages 설정에서 **Source → GitHub Actions**가 선택되어 있는지 확인하세요.

### 5단계: 사이트 확인

배포 후 몇 분 뒤 다음 URL에서 사이트를 확인할 수 있습니다:

```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

## 📝 주요 파일 설명

- **index.html**: 메인 React 앱 (Storyboard Portfolio)
- **vivecoding.html**: VIVE CODING 소개 페이지
- **vc2.html**: 코드 예제와 실습 자료
- **LM.HTML**: 웹 인포그래픽 (NotebookLM)

## 🔄 업데이트 방법

코드를 수정한 후:

```bash
npm run build
git add .
git commit -m "Update content"
git push
```

## ⚠️ 문제 해결

### 페이지가 표시되지 않는 경우

1. GitHub Pages 설정에서 브랜치가 올바른지 확인
2. 빌드가 성공했는지 확인 (`build` 폴더가 있는지)
3. 저장소가 Public인지 확인

### CSS/JS가 로드되지 않는 경우

`vite.config.ts`에서 `base: './'`가 올바르게 설정되어 있는지 확인합니다.

## 💡 팁

- 커스텀 도메인을 사용하려면 GitHub Pages 설정에서 도메인을 추가하세요
- HTTPS는 자동으로 활성화됩니다
- 배포는 보통 1-5분 정도 소요됩니다

