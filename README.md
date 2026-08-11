# 🧊 My Smart Fridge (나만의 스마트 냉장고)

귀엽고 입체적인 3D 냉장고 UI와 스마트한 식단 추천 기능이 탑재된 냉장고 관리 웹 애플리케이션입니다! 🍎🥦

## ✨ 주요 기능

* **인터랙티브 3D 냉장고 UI:** 
  * 냉장실과 냉동실 문을 클릭하면 부드럽게 3D로 열리는 애니메이션 (CSS 3D Transforms 적용).
  * 내부에는 귀여운 일러스트로 채소와 식재료 칸이 사실감 있게 표현되어 있습니다.
* **식재료 유통기한 관리:**
  * 냉장실/냉동실에 보관 중인 식재료를 손쉽게 등록, 이름 및 유통기한 수정, 삭제할 수 있습니다.
  * 유통기한이 3일 이내로 남은 식재료는 **🚨 D-Day 배지**를 통해 시각적으로 긴급도를 알려줍니다.
* **스마트 식단 추천 (냉장고 파먹기):**
  * 현재 냉장고와 냉동실에 보관 중인 실제 재료들을 분석하여 만들 수 있는 맞춤형 요리를 한 번에 3개씩 추천해 줍니다.
  * 요리별 소요 시간과, 분/초 단위의 구체적인 단계별 레시피를 바로 펼쳐서 확인할 수 있습니다.

## 📸 스크린샷

*(아래는 예시 이미지입니다. 프로젝트를 실행한 후 멋진 스크린샷을 찍어 `screenshot.png`라는 이름으로 폴더에 넣고 이 부분을 수정해보세요!)*

<p align="center">
  <img src="https://via.placeholder.com/800x450/fff0f3/ff99a8?text=Smart+Fridge+App+Screenshot" alt="App Screenshot" width="800"/>
</p>

## 🛠️ 기술 스택

* **Frontend:** React (Hooks, State Management), Vite
* **Styling:** Vanilla CSS (Custom Properties, Flexbox/Grid, Keyframe Animations, 3D Perspective)
* **Icons:** Lucide-React

## 🚀 로컬에서 시작하기

프로젝트를 로컬 환경에서 실행하려면 아래 명령어를 순서대로 입력하세요.

```bash
# 1. 저장소 클론
git clone https://github.com/kimty115/app_fridge.git

# 2. 프로젝트 폴더로 이동
cd app_fridge

# 3. 의존성 패키지 설치
npm install

# 4. 개발 서버 실행
npm run dev
```

## 🤝 기여 및 피드백
버그 리포트나 재미있는 기능 제안은 언제든 환영합니다! Issue를 남겨주시거나 Pull Request를 보내주세요.
