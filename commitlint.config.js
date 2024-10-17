module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "[Feat]", // 새로운 기능에 대한 커밋
        "[Fix]", // 버그 수정에 대한 커밋
        "[Build]", // 빌드 관련 파일 수정에 대한 커밋
        "[Chore]", // 그 외 자잘한 수정에 대한 커밋
        "[Delete]", // 기능 삭제에 대한 커밋
        "[Ci]", // CI관련 설정 수정에 대한 커밋
        "[Docs]", // 문서 수정에 대한 커밋
        "[Style]", // 코드 스타일 혹은 포맷 등에 관한 커밋
        "[Refactor]", // 코드 리팩토링에 대한 커밋
        "[Test]", // 테스트 코드 수정에 대한 커밋
      ],
    ],
  },
};
