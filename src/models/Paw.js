class Paw {
    constructor(agree, against, no) {
        this.agree = agree;
        this.against = against;
        this.no = no;
    }

    static seed() {
        return new Paw(0, 0, 0);
    }

    add(otherPaw) {
        return new Paw(this.agree + otherPaw.agree
                      , this.against + otherPaw.against
                      , this.no + otherPaw.no
        )
    }

    overall(){
        return (1* this.agree + (-1) * this.against + 0 * this.no) / (this.agree + this.against + this.no);
    }
}

export default Paw