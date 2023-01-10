import { Button } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

export default function (price: number,
  ingreso: string,
  egreso: string,
  idm: number,
  title: string
) {

  const form = document.createElement("form");
  form.method = "POST";
  form.action = `${process.env.REACT_APP_API || 'http://localhost:3001'}/api/checkout`;

  const inputPrice = document.createElement("input");
  inputPrice.name = "price";
  inputPrice.value = String(price);
  inputPrice.type = "hidden";
  form.appendChild(inputPrice);

  const inputIngreso = document.createElement("input");
  inputIngreso.name = "ingreso";
  inputIngreso.value = String(ingreso);
  inputIngreso.type = "hidden";
  form.appendChild(inputIngreso);

  const inputEgreso = document.createElement("input");
  inputEgreso.name = "egreso";
  inputEgreso.value = String(egreso);
  inputEgreso.type = "hidden";
  form.appendChild(inputEgreso);

  const inputTitle = document.createElement("input");
  inputTitle.name = "title";
  inputTitle.value = String(title);
  inputTitle.type = "hidden";
  form.appendChild(inputTitle);

  const inputIdm = document.createElement("input");
  inputIdm.name = "idm";
  inputIdm.value = String(idm);
  inputIdm.type = "hidden";
  form.appendChild(inputIdm);

  document.body.appendChild(form);
  form.submit();
}