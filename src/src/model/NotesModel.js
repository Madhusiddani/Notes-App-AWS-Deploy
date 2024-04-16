class Notes {
    constructor(noteobj){
        for(const key in noteobj) {
            this[key]=noteobj[key]
        }
        this.isMarked = false
    }
    toggleMarks(){
        this.isMarked = this.isMarked;
    }
}
export default Notes;