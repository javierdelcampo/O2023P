# Bloque I. Tema 8. DNI electrónico

## Autoridades de Certificación y Autoridades de Validación del DNIe 

### Autoridad de Certificación

La Dirección General de la Policía (Ministerio del Interior) actúa como Autoridad de Certificación (AC), relacionando dos pares de claves con un ciudadano concreto a través de la emisión de sendos Certificados de conformidad con los términos de esta DPC.

Las Autoridades de Certificación que componen la PKI del DNIe son:

- "AC Raíz": Autoridad de Certificación de primer nivel. Esta AC sólo emite certificados para sí misma y sus AC Subordinadas. Únicamente estará en funcionamiento durante la realización de las operaciones para las que se establece.
- "AC Subordinadas": Autoridades de Certificación subordinadas de "AC Raíz". Su función es la emisión de certificados para los titulares de DNIe.
  
### Autoridad de Validación del DNIe

La Autoridad de Validación es el componente que tiene como tarea suministrar información sobre la vigencia de los certificados electrónicos que, a su vez, hayan sido registrados por una Autoridad de Registro y certificados por la Autoridad de Certificación.

La información sobre los certificados electrónicos revocados (no vigentes) se almacena en las denominadas listas de revocación de certificados (CRL).

Para la validación del DNI electrónico se dispone de dos prestadores de Servicios de Validación:

- "AV DNIE ***FNMT***":Certificado de Validación de la Fábrica Nacional de Moneda y Timbre – Real Casa de la Moneda, que prestará sus servicios de validación con carácter universal: ciudadanos, empresas y Administraciones Públicas.
- "AV DNIE ***MINHAP***":La Autoridad de Validación del MINHAP que presta este servicio al conjunto de las Administraciones Públicas para los diferentes Prestadores de Servicios Electrónicos de Confianza publicados por el Ministerio de Energía, Turismo y Agenda Digital, entre los que se encuentra la Autoridad de Certificación de la Dirección General de la Policía.

La prestación de estos servicios de validación se realiza en base a ***Online Certificate Status Protocol (OCSP)***, lo que, en esencia, supone que un cliente OCSP envía una petición sobre el estado del certificado a la Autoridad de Validación, la cual, tras consultar su base de datos, ofrece - vía http - una respuesta sobre el estado del certificado.

## Periodos de validez

Al hablar de vida útil se deben contemplar dos aspectos:

La validez de la ***tarjeta-soporte*** que, conforme al art. 6 del RD 1553/2005, de 23 de diciembre, modificado por el Real Decreto 869/2013, de 8 de noviembre , tiene los siguientes periodos de validez:

- Dos años, cuando el solicitante no haya cumplido los cinco años de edad.
- Cinco años cuando el titular haya cumplido los cinco años de edad y no haya alcanzado los treinta al momento de la expedición o renovación.
- Diez años cuando el titular haya cumplido los treinta y no haya alcanzado los setenta.
- Permanente cuando el titular haya cumplido los setenta años, o se trate de una persona mayor de treinta años que acredite la condición de gran inválido.

Sus certificados electrónicos ya que, con independencia de lo que establece el artículo 6.1 sobre la validez del Documento Nacional de Identidad, la vigencia de los certificados electrónicos reconocidos incorporados al mismo ***no podrá ser superior a cinco años*** (antes cuatro años) (Real Decreto 414/2015, de 29 de mayo). <ins>OJO</ins>: sólo indica que no pueden ser superiores a 5 años, pero pueden ser de menos (ahora mismo son de <ins>20 años</ins>)

[🛕🇲🇲](https://www.youtube.com/watch?v=rZy1WKwoHuU&t=7s)
