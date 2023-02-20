import { LightningElement, api } from 'lwc';
  
export default class UnitTest extends LightningElement {
  @api unitNumber = 5;

  handleChange(event) {
    // eslint-disable-next-line @lwc/lwc/no-api-reassignments
    this.unitNumber = event.target.value;
  }
}