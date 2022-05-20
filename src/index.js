import { modal } from "./modules/modal";
import { accordeon } from "./modules/accordeon";
import { scroll } from "./modules/scroll";
import { addDots } from "./modules/addDots";
import { slider } from "./modules/slider";
import { carousel } from "./modules/carousel";
import { sendForm } from "./modules/sendForm";
import { maskPhone } from "./modules/maskPhone";

modal();
accordeon();
scroll();
addDots();
slider();
carousel();
maskPhone("tel-mask");
sendForm({ formId: ["form-callback"] });
