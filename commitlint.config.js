module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^\[(Feat|Fix|Build|Chore|Delete|Ci|Docs|Style|Refactor|Test)]\s(.*)$/,
      headerCorrespondence: ["type", "subject"],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "Feat", // 새로운 기능에 대한 커밋
        "Fix", // 버그 수정에 대한 커밋
        "Build", // 빌드 관련 파일 수정에 대한 커밋
        "Chore", // 그 외 자잘한 수정에 대한 커밋
        "Delete", // 기능 삭제에 대한 커밋
        "Ci", // CI 관련 설정 수정에 대한 커밋
        "Docs", // 문서 수정에 대한 커밋
        "Style", // 코드 스타일 혹은 포맷 등에 관한 커밋
        "Refactor", // 코드 리팩토링에 대한 커밋
        "Test", // 테스트 코드 수정에 대한 커밋
      ],
    ],
    "subject-empty": [2, "never"], // subject가 비어있지 않도록 규칙 설정
    "type-empty": [2, "never"], // type이 비어있지 않도록 규칙 설정
    "type-case": [0], // type-case 규칙 비활성화
    "subject-case": [0], // subject-case 규칙 비활성화
  },
};
