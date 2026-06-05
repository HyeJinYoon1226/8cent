import type { Perfume } from "../types/perfume";

import osakaImage from "../osaka.png";
import kyotoImage from "../kyoto.png";
import naraImage from "../nara.png";
import kobeImage from "../kobe.png";

export const perfumes: Perfume[] = [
  {
    id: 1,
    city: "오사카",
    name: "별빛이 번지던 강가",
    type: "citrus",
    concept: "화이트 머스크와 시트러스",
    notes: ["화이트 머스크", "유자", "레몬", "오렌지"],
    description: "타나바타 밤, 도톤보리의 반짝이는 분위기를 담은 향입니다.",
    image: osakaImage,
  },
  {
    id: 2,
    city: "교토",
    name: "새벽이 깃든 다다미",
    type: "woody",
    concept: "히노끼와 그린티",
    notes: ["히노끼", "코튼", "대나무", "그린티"],
    description: "고요한 교토의 새벽과 전통 공간을 담은 차분한 향입니다.",
    image: kyotoImage,
  },
  {
    id: 3,
    city: "나라",
    name: "사슴이 머무른 자리",
    type: "fresh",
    concept: "자연적인 우디 그린",
    notes: ["우디", "풀잎", "머스크", "그린 노트"],
    description: "나라 공원의 초록빛 산책길과 사슴의 온기를 담은 향입니다.",
    image: naraImage,
  },
  {
    id: 4,
    city: "고베",
    name: "달빛이 내려앉은 부두",
    type: "sweet",
    concept: "부드러운 바닐라 앰버",
    notes: ["바닐라", "앰버", "플로럴", "바다 바람"],
    description: "항구 도시 고베의 세련되고 부드러운 분위기를 표현한 향입니다.",
    image: kobeImage,
  },
];