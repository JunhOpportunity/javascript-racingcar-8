import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let carCount = 0;
    let racingResult = [];

    const CAR_NAMES = await this.inputCarNames();
    const SPLITED_CAR_NAME = this.splitCarNames(CAR_NAMES);
    carCount = SPLITED_CAR_NAME.length;

  async inputCarNames() {
    const CAR_NAMES = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    return CAR_NAMES;
  }

  splitCarNames(CAR_NAMES) {
    const SPLITED_CAR_NAME = CAR_NAMES.split(",");

    SPLITED_CAR_NAME.forEach((CAR_NAME) => {
      if (CAR_NAME.length > 5) {
        throw new Error("[ERROR] 차의 이름이 5글자 이하가 아닙니다!");
      }
    });

    return SPLITED_CAR_NAME;
  }
}

export default App;
