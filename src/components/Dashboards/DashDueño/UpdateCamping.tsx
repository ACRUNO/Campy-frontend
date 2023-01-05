import { useEffect, useState } from "react";
import CreateCamping from "../../CreateCamping/CreateCamping"
import { PreInputsValues } from "../../../reducer/estados";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function UpdateCamping() {
  const campingId: string = useLocation().state.campingId as string;

  const [preInputValues, setPreInputValues] = useState<PreInputsValues | null>(null);

  const formatResponse = (data: any) => {
    const { precios, ...newData } = data;

    precios.forEach((ele: any) => newData[ele.descrip_tarifa.toLowerCase() as string] = ele.precio);

    return newData;
  }

  const getCampingDetail = async () => {
    const json = await axios.get(`/api/campings/${campingId}`);

    setPreInputValues(() => formatResponse(json.data));
  };

  useEffect(() => {
    getCampingDetail();
  }, []);

  if (!preInputValues) return <div>a</div>

  return <CreateCamping preInputValues={preInputValues} />
}