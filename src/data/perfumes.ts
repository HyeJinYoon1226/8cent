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
    concept: "화이트 머스크와 시트러스",
    notes: ["화이트 머스크", "유자", "레몬", "오렌지"],
    description: "도톤보리의 밤과 타나바타의 반짝이는 분위기를 담은 향입니다.",
    story:
      "오사카에서 마주한 화려한 거리, 강가에 비친 불빛, 여행의 설렘을 향기로 기록했습니다.",
    image: osakaImage,
  },
  {
    id: 2,
    city: "KYOTO",
    name: "새벽이 깃든 다다미",
    type: "woody",
    concept: "히노끼와 그린티",
    notes: ["히노끼", "코튼", "대나무", "그린티"],
    description: "고요한 교토의 새벽과 전통 공간을 담은 차분한 향입니다.",
    story:
      "교토의 전통적인 거리와 신사, 조용한 새벽 공기에서 느껴지는 차분함을 향기로 표현했습니다.",
    image: kyotoImage,
  },
  {
    id: 3,
    city: "NARA",
    name: "사슴이 머무른 자리",
    type: "fresh",
    concept: "자연적인 우디 그린",
    notes: ["우디", "풀잎", "머스크", "그린 노트"],
    description: "나라 공원의 초록빛 산책길과 사슴의 온기를 담은 향입니다.",
    story:
      "나라 공원의 자연, 느린 산책길, 사슴과 함께한 평온한 순간을 향기로 기록했습니다.",
    image: naraImage,
  },
];