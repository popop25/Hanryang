// require("tsconfig-paths/register");
// import app from "./app";
// import { sequelize } from "./models";

// const startServer = async () => {
//   try {
//     // 데이터베이스 연결 확인
//     await sequelize.authenticate();
//     console.log("데이터베이스 연결 성공");

//     // 서버 실행
//     app.listen(app.get("port"), () => {
//       console.log(`${app.get("port")}번 포트에서 서버 대기 중`);
//     });
//   } catch (error) {
//     console.error("데이터베이스 연결 실패:", error);
//     process.exit(1); // 연결 실패 시 프로세스 종료
//   }
// };

// startServer();

//server.ts
require("tsconfig-paths/register");
import app from "./app";
import { sequelize } from "./models";

const startServer = async () => {
  try {
    // 데이터베이스 연결 확인
    await sequelize.authenticate();
    console.log("데이터베이스 연결 성공");

    // 테이블 동기화
    await sequelize.sync({ force: true }); // 기존 테이블을 삭제하고 다시 생성
    console.log("테이블 동기화 완료");

    // 서버 실행
    app.listen(app.get("port"), () => {
      console.log(`${app.get("port")}번 포트에서 서버 대기 중`);
    });
  } catch (error) {
    console.error("데이터베이스 연결 실패:", error);
    process.exit(1); // 연결 실패 시 프로세스 종료
  }
};

startServer();
