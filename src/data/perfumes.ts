import type { Perfume } from "../types/perfume";

import osakaImage from "../osaka.png";
import kyotoImage from "../kyoto.png";
import naraImage from "../nara.png";

export const perfumes: Perfume[] = [
  {
    id: 1,
    city: "OSAKA",
    name: "가장 반짝이던 밤",
    type: "citrus",
    concept: "White Musk · Yuzu · Citrus",
    notes: ["화이트 머스크", "유자", "시트러스"],
    mood: "활기찬 도시 감성 · 생동감 있는 에너지",
    description: "도톤보리의 네온과 도시의 활기를 담은 시트러스 계열의 향입니다.",
    story: "오사카의 화려한 밤거리, 강가에 비친 불빛, 여행의 설렘을 향기로 기록했습니다.",
    image: osakaImage,
  },
  {
    id: 2,
    city: "KYOTO",
    name: "새벽이 깃든 다다미",
    type: "woody",
    concept: "Hinoki · Green Tea · White Floral",
    notes: ["히노끼", "그린티", "화이트 플로럴"],
    mood: "전통과 휴식의 감성 · 고요한 아름다움",
    description: "교토의 전통 공간과 새벽의 차분함을 담은 우디 계열의 향입니다.",
    story: "고요한 신사, 다다미방의 공기, 새벽 골목의 정적을 향기로 표현했습니다.",
    image: kyotoImage,
  },
  {
    id: 3,
    city: "NARA",
    name: "사슴이 머무른 자리",
    type: "fresh",
    concept: "Woody · Forest Air · Earth & Moss",
    notes: ["우디", "숲 공기", "이끼와 흙"],
    mood: "자연과 사슴의 감성 · 숲과 대지의 향기",
    description: "나라 공원의 자연과 사슴이 머무는 평온한 순간을 담은 그린 우디 향입니다.",
    story: "초록빛 산책길, 숲속 공기, 사슴과 함께한 느린 시간을 향기로 기록했습니다.",
    image: naraImage,
  },
];