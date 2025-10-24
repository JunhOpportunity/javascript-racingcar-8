import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let carCount = 0;
    let racingResult = [];

    const CAR_NAMES = await this.inputCarNames();

  async inputCarNames() {
    const CAR_NAMES = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );

    return CAR_NAMES;
  }
}

export default App;
