export class Subject {
  constructor(data) {
    this.label = '';
    this.description = '';
    this.sofware = [];
    this.groupSize = null;
    this.projector = 'no';
    this.board = 'no';
    this.course = null;
    this.title = null;
    this.smartBoard = 'no';
    this.os = [];
    this.duration = null;
    this.lessons = null;
    _.assignWith(this, data);
  }
}
