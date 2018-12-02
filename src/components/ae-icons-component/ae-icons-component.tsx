import { Component, Prop } from "@stencil/core";
import "ionicons";

@Component({
  tag: "ae-icons-component",
  styleUrl: "ae-icons-component.css",
  shadow: true
})
export class AeIconsComponent {


  @Prop() aesize: string;
  @Prop() name: string;
  @Prop() color: string;

  /**
   * The component is about to load and has not rendered yet.
   * This is the best place to make any data updates
   * before the first render.
   * componentWillLoad will only be called once.
   */
  componentWillLoad() {
    //console.log('Component ae-icons-component is about to be rendered');
    //console.log('aesize=' + this.aesize + ' name=' + this.name + ' color=' + this.color)
    //this.setMyVars();
  }

  setMyVars() {
    //console.log('Component ae-icons-component setMyVars');
  }

  render() {
    return (
      <ion-icon class={this.aesize} name={this.name} color={this.color}></ion-icon>
    );
  }
}

