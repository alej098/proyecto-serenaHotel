/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';

const CardHome = ({ nombre, precio, imagenes, servicios, id  }) => {
  const navigate = useNavigate();
  const handleVerClick = () => {
    navigate(`/habitacion/${id}`);
  };

  return (
    <Card className="m-0 p-0 flex flex-col items-center justify-center bg-verde  w-full max-w-[28rem] ">
      <CardHeader className="bg-verde" floated={false}>
        <img
          src={imagenes[0]}
          alt={nombre}
        />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography className="text-blanco text-xl font-medium ">
            {nombre}
          </Typography>
        </div>

        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          {servicios.map(({ icono, descripcion, index }) => (
            <Tooltip
              key={`${icono}-${descripcion}-${index}`}
              content={descripcion}
            >
              <span className="material-symbols-outlined cursor-pointer rounded-full border border-verde bg-gray-900/5 p-3 text-blanco transition-colors hover:border-blanco hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                {icono}
              </span>
            </Tooltip>
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex flex-row items-center gap-60 justify-between">
        <Typography className="text-blanco font-light">
          ${precio} / Noche
        </Typography>
        <Button size="lg" className="bg-naranja" fullWidth={true} onClick={() => handleVerClick(id)}>
          VER
        </Button>
      </CardFooter>
    </Card>
  );
};
export default CardHome;
