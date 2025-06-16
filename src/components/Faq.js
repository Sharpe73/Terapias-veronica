import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  return (
    <section className="max-w-3xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Preguntas Frecuentes
      </h2>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">¿Cuánto dura una sesión de masaje?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Depende del tipo de masaje que elijas. Las sesiones pueden durar entre <strong>40 y 60 minutos</strong>,
            según el tratamiento. Al agendar, te explicaremos la duración para tu caso específico.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">¿Debo llevar algo para mi sesión?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No es necesario. Nosotros proporcionamos todo: camilla, aceites y música relajante. Solo ven con ropa cómoda.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="bold">¿Puedo reagendar si no puedo asistir?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sí, puedes reagendar sin costo avisando con al menos 24 horas de anticipación.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}

export default Faq;
