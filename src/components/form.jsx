import Input from "./inputs";
import Radio from "./radio";
import Select from "./select";
import { Column, Btn, Divicao } from "../Style/style";

const Form = () => {
  return (
    <Column>
      <Divicao>
        <label htmlFor="name">Pokemon name:</label>
        <Input id="name" type="text" />
      </Divicao>
      <Divicao>
        <label htmlFor="master">Pokemon master:</label>
        <Input id="master" />
      </Divicao>
      <Divicao>
        <label htmlFor="height">Height: </label>
        <Input id="height" type="number" />
      </Divicao>
      <Divicao>
        <label htmlFor="weight">Weight: </label>
        <Input id="weight" type="number" />
      </Divicao>
      <Divicao>
        <label>Types:</label>
        <Select options={["Grass", "Fire", "Whater", "Dark"]} />
      </Divicao>
      <Radio />
      <Btn>Enviar</Btn>
    </Column>
  );
};

export default Form;
