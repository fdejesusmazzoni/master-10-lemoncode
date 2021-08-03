console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
  private cont = 0;

  private getRandomBoolean = () => {
    const rnd = Math.random();
    return rnd > 0.5;
  };

  public play = () => {
    this.cont++;
    const value1 = this.getRandomBoolean();
    const value2 = this.getRandomBoolean();
    const value3 = this.getRandomBoolean();

    let result = "Good luck next time!!";

    if (value1 && value2 && value3) {
      result = `Congratulations!!!. You won ${this.cont} coins!!`;
      this.cont = 0;
    }

    console.log(result);
  };
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
