require("tsconfig-paths/register");
import app from "./app";
import { sequelize } from "./models";

const startServer = async () => {
  let retries = 5; // 최대 재시도 횟수
  while (retries) {
    try {
      // 데이터베이스 연결 확인
      await sequelize.authenticate();
      console.log("데이터베이스 연결 성공");

      // 테이블 동기화
      await sequelize.sync({ force: true }); // 기존 테이블 삭제 후 다시 생성
      console.log("테이블 동기화 완료");

      // 서버 실행
      app.listen(app.get("port"), () => {
        console.log(`${app.get("port")}번 포트에서 서버 대기 중`);
      });
      break; // 성공 시 반복 종료
    } catch (error) {
      console.error("데이터베이스 연결 실패. 재시도 중...", error);
      retries -= 1;

      // 재시도 대기
      if (retries === 0) {
        console.error("데이터베이스 연결 실패. 서버를 종료합니다.");
        process.exit(1); // 연결 실패 시 프로세스 종료
      }
      await new Promise((resolve) => setTimeout(resolve, 5000)); // 5초 대기
    }
  }
};

startServer();
