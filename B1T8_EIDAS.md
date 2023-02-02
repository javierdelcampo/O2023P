# EIDAS

El Reglamento (UE) Nº 910/2014 del Parlamento Europeo y del Consejo, de 23 de julio de 2014, relativo a la identificación electrónica y los servicios de confianza en las transacciones electrónicas en el mercado interior y por el que se deroga la Directiva 1999/93/CE (Reglamento eIDAS), tiene como objetivo reforzar el Mercado Único europeo otorgando un nivel de seguridad adecuado a los medios de identificación electrónica y los servicios de confianza, es una norma de aplicación directa en el ámbito de la Unión Europea que establece:
a) las condiciones en que los Estados Miembros deberán reconocer los medios de identificación electrónica de las personas físicas y jurídicas pertenecientes a un sistema de identificación electrónica notificado de otro Estado miembro,
b) las normas para los servicios de confianza, en particular para las transacciones electrónicas, y 
c) el marco jurídico para las firmas electrónicas, los sellos electrónicos, los sellos de tiempo electrónicos, los documentos electrónicos, los servicios de entrega electrónica certificada y los servicios de certificados para la autenticación de sitios web

## Certificados contemplados en el Reglamento eIDAS

- ***Certificado de firma***: orientado a la firma de personas físicas. La firma implica la garantía de origen e integridad de los datos firmados, así como la conformidad/consentimiento con dichos datos y obligación legal respecto al contenido. Es equivalente al certificado de firma de persona física de la ley 59/2003.
- ***Certificado de sello***: orientado al sello de personas jurídicas. Es parcialmente similar al certificado de persona jurídica de la Ley 59/2003, con las diferencias:
  - No llevan una persona custodio/responsable del certificado.
  - Se orienta al sello (garantía de origen e integridad de los datos).
  - Además de autenticar el documento expedido por la persona jurídica, los sellos electrónicos pueden utilizarse para autenticar cualquier activo digital de
la persona jurídica, por ejemplo, programas informáticos o servidores (Considerando 65 del Reglamento eIDAS)
  - Cuando una transacción exija un sello electrónico cualificado de una persona jurídica, debe ser igualmente aceptable una firma electrónica cualificada del
representante autorizado de la persona jurídica. (Considerando 58 del Reglamento eIDAS). No a la inversa.
- ***Certificado de autenticación web***. Orientado a vincular el sitio web con la persona física o jurídica titular del certificado.
- ***Certificado no cualificado***. Puede estar orientado tanto a personas físicas, como jurídicas, componentes, SSL. Para persona física no se contempla su uso ya que no está recogido en la legislación vigente (Ley 39/2015), al no aportar las mismas garantías que los certificados cualificados, como por ejemplo estar sometidos a una supervisión más ligera, los requisitos de verificación de la identidad de la persona a quien se expide el certificado, o proporcionar el estado de validez o revocación de forma automatizada, fiable, gratuita y eficiente. etc.

## Nodo EIDAS

El nodo eIDAS español es un proyecto que permite el reconocimiento mutuo de identidades electrónicas en Europa. En concreto facilita la aceptación del DNI electrónico en servicios de Administración Electrónica de otras administraciones europeas así como la identificación de ciudadanos europeos en servicios públicos españoles utilizando un medio de identificación de su país de origen.

Este nodo es el componente de interoperabilidad que se conecta con los servicios electrónicos y los sistemas de identificación nacionales, y con los nodos correspondientes de otros Estados miembros, y permite el reconocimiento de identidades electrónicas emitidas por otros países de acuerdo con el Reglamento eIDAS.

Para las Administraciones Públicas, la integración con el nodo eIDAS español se realiza a través del sistema Cl@ve.

## Ciclo de vida del certificado

- Solicitud de certificado
- Procesamiento de solicitud del certificado
- Emisión de certificados
- Aceptación del certificado
- Par de claves y uso de certificados
- Renovación del certificado
- Cambio de clave del certificado
- Modificación del certificado
- Servicios del estado de los certificados

[⏰](https://www.youtube.com/watch?v=VhWTDvPLGTE)
