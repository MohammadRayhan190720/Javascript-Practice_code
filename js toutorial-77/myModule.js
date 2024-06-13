export let text = "hello Welcome to Module";
export {text as name};

export function setText (txt){
  text = txt;
}