# Bloque I. Tema 10. Esquema Nacional de Interoperabilidad - ENI

## Principios básicos del Esquema Nacional de Interoperabilidad

La aplicación del Esquema Nacional de Interoperabilidad se desarrollará de acuerdo con los principios generales establecidos en el artículo 4 de la Ley 11/2007, de 22 de junio, y con los siguientes principios específicos de la interoperabilidad:
- La interoperabilidad como cualidad integral.
- Carácter multidimensional de la interoperabilidad.
- Enfoque de soluciones multilaterales.

Ley 11/2007
a). El respeto al derecho a la protección de datos de carácter personal
b) Principio de igualdad
c) Principio de accesibilidad
d) Principio de legalidad
e) Principio de cooperación
f) Principio de seguridad
g) Principio de proporcionalidad
h) Principio de responsabilidad y calidad en la veracidad y autenticidad de las informaciones y servicios
i) Principio de neutralidad tecnológica y de adaptabilidad al progreso
j) Principio de simplificación administrativa
k) Principio de transparencia y publicidad del procedimiento

## Documento electrónico. Norma Técnica de Interoperabilidad de Documento electrónico

[[PAe. Normas Técnicas de Interoperabilidad]](https://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Interoperabilidad_Inicio/pae_Normas_tecnicas_de_interoperabilidad.html)

Establece los componentes del documento electrónico, incluyendo contenido, firma electrónica y metadatos mínimos obligatorios, y su formato, así como las condiciones para su intercambio y reproducción.

Un documento administrativo electrónico es el objeto digital administrativo que contiene la información objeto (datos y firma) y los datos asociados a ésta (metadatos.

Es de aplicación a los documentos administrativos electrónicos y a cualquier otro documento susceptible de formar parte de un expediente electrónico de cualquier órgano de la Administración y Entidades de Derecho Público vinculadas o dependientes de aquélla (en adelante, organizaciones)

Tipos de documentos que se pueden hallar en formato electrónico:
- Documentos de decisión: resoluciones, acuerdos, contratos, convenios y declaraciones
- Documentos de transmisión: comunicaciones, notificaciones, publicaciones y acuses de recibo
- Documentos de constancia: actas, certificados y diligencias
- Documentos de juicio: informes
- Documentos de ciudadano: solicitudes, denuncias, alegaciones, recursos, comunicaciones, facturas y otros incautados
- Otros

Dimensiones de un documento:
- Contenido
- Firma electrónica
- Los metadatos

Estructura lógica:
- Datos: contenido e identificación (firma)
- Metadatos

Tipos de firma:
- Ciudadano: certificados de firma, sello, otros sistemas validados por las administraciones
- Organizaciones (públicas): certificados de firma, CSV

Un documento puede estar compuesto por varios ficheros, pero forman una única unidad digital

## Expediente electrónico

"Conjunto ordenado de documentos y actuaciones que sirven de antecedente y fundamento a la resolución administrativa, así como las diligencias encaminadas a ejecutarla", estableciendo además que "los expedientes tendrán formato electrónico".

Para garantizar la vinculación de los documentos electrónicos que conforman un expediente, la Ley define el índice electrónico “como un índice numerado y autentificado de todos los documentos que contenga cuando se remita”, estableciendo además que “La autenticación del citado índice garantizará la integridad e inmutabilidad del expediente electrónico generado desde el momento de su firma y permitirá su recuperación siempre que sea preciso”

La Norma Técnica de Interoperabilidad de Expediente electrónico tiene por objeto establecer la estructura y el formato del expediente electrónico, así como las especificaciones de los servicios de remisión y puesta a disposición.

Componentes del Expediente Electrónico:
- Documentos electrónicos
- Índice electrónico
- Firma del índice electrónico
- Metadatos del expediente

Ciclo de vida / fases:
- Apertura
- Tramitación
- Conservación y selección

## Estándares de firma

- CADES - CMS
  - Detached. Contenido firmado y firma constituyen ficheros independientes
  - Enveloped. El fichero de firma envuelve el propio contenido firmado de forma que, para acceder al contenido, es necesario interpretar la firma
- PADES - PDF. Contenido firmado y firma se incluyen bajo un único fichero PDF que permite el acceso a ambos componentes de forma independiente.
- XADES - XML. Detached o encapsulada. Facilita el procesado automático
  - Detached. Contenido firmado y firma comparten una misma estructura XML como nodos independientes y del mismo nivel. Dentro de este tipo, para las firmas de documentos de gran tamaño, se puede considerar el uso de etiquetas ‘manifest’, para la inclusión de las referencias al documento firmado
  - Enveloped. Contenido firmado y firma comparten una misma estructura XML necesaria para la validación de la firma. La firma se ubica justo después del contenido firmado
- CMS
- ETSI TS 102 176-1
- PDF Signature
- PKCS#7
- XML-DSig


