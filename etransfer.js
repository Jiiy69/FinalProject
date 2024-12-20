class ETransfer {
    constructor(sender, recipient, amount, securityQuestion, securityAnswer) {
        this.sender = sender;
        this.recipient = recipient;
        this.amount = amount;
        this.securityQuestion = securityQuestion;
        this.securityAnswer = securityAnswer;
    }

    accept(answer) {
        return this.securityAnswer === answer;
    }
}

module.exports = ETransfer;
