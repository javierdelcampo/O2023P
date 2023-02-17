# Cosas a memorizar porque sí

- [Cosas a memorizar porque sí](#cosas-a-memorizar-porque-sí)
  - [USB](#usb)
      - [Power Delivery (PD)](#power-delivery-pd)
  - [Thunderbolt](#thunderbolt)
  - [Thunderbolt - USB 4](#thunderbolt---usb-4)
  - [Telefonía móvil (digital)](#telefonía-móvil-digital)
  - [Wifi](#wifi)
  - [Buses almacenamiento (PASAR)](#buses-almacenamiento-pasar)
  - [Códigos HTTP](#códigos-http)
  - [CCN](#ccn)

## USB

:link: https://fabiensanglard.net/usbcheat/index.html

<table>
<thead>
  <tr>
    <th>Nombre comercia</th>
    <th>Conocido como</th>
    <th>Gbps</th>
    <th>MiB/s</th>
    <th>Hilos</th>
    <th>Long. cable</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>USB 1.1</td>
    <td>Full Speed</td>
    <td>12 Mbps</td>
    <td>1.5 MiB/s</td>
    <td>4</td>
    <td>4m</td>
  </tr>
  <tr>
    <td>USB 2.0</td>
    <td>Hi-Speed</td>
    <td>480 Mbps</td>
    <td>60 MiB/s</td>
    <td>4</td>
    <td>4m</td>
  </tr>
  <tr>
    <td rowspan="5">SuperSpeed USB 5Gbps</td>
    <td>USB 3.0</td>
    <td rowspan="5">5000 Mbps</td>
    <td rowspan="5">625 MiB/s</td>
    <td rowspan="5">8</td>
    <td rowspan="5">3m</td>
  </tr>
  <tr>
    <td>USB 3.1</td>
  </tr>
  <tr>
    <td>USB 3.2</td>
  </tr>
  <tr>
    <td>USB 3.1&nbsp;&nbsp;&nbsp;Gen 1</td>
  </tr>
  <tr>
    <td>USB 3.2&nbsp;&nbsp;&nbsp;Gen 1</td>
  </tr>
  <tr>
    <td rowspan="4">SuperSpeed&nbsp;&nbsp;&nbsp;USB 10Gbps</td>
    <td>USB 3.1</td>
    <td rowspan="4">10000 Mbps</td>
    <td rowspan="4">1250 MiB/s</td>
    <td rowspan="4">8</td>
    <td rowspan="4">2m</td>
  </tr>
  <tr>
    <td>USB 3.2</td>
  </tr>
  <tr>
    <td>USB 3.1&nbsp;&nbsp;&nbsp;Gen 2</td>
  </tr>
  <tr>
    <td>USB 3.2&nbsp;&nbsp;&nbsp;Gen 2</td>
  </tr>
  <tr>
    <td rowspan="2">SuperSpeed&nbsp;&nbsp;&nbsp;USB 20Gbps</td>
    <td>USB 3.2</td>
    <td rowspan="2">20000 Mbps</td>
    <td rowspan="2">2500 MiB/s</td>
    <td rowspan="2">12</td>
    <td rowspan="2">1m</td>
  </tr>
  <tr>
    <td>USB 3.2 - Gen 2x2</td>
  </tr>
  <tr>
    <td rowspan="2">USB4&nbsp;&nbsp;&nbsp;20Gbps</td>
    <td>USB4 Gen 2×2</td>
    <td rowspan="2">20000 Mbps</td>
    <td rowspan="2">2500 MiB/s</td>
    <td rowspan="2">12</td>
    <td rowspan="2">0.8m</td>
  </tr>
  <tr>
    <td>USB4</td>
  </tr>
  <tr>
    <td rowspan="2">USB4&nbsp;&nbsp;&nbsp;40Gbps</td>
    <td>USB4 Gen 3×2</td>
    <td rowspan="2">40000 Mbps</td>
    <td rowspan="2">5000 MiB/s</td>
    <td rowspan="2">12</td>
    <td rowspan="2">0.8m</td>
  </tr>
  <tr>
    <td>USB4</td>
  </tr>
</tbody>
</table>

#### Power Delivery (PD)

Perfiles USB Power Delivery <ins>Rev.1.0</ins>

<table>
<thead>
  <tr>
    <th>Perfil</th>
    <th>+5 V</th>
    <th>+12 V</th>
    <th>+20 V</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>0</td>
    <td colspan="3">Reservado</td>
  </tr>
  <tr>
    <td>1</td>
    <td rowspan="5">2.0 A, 10 W</td>
    <td>—</td>
    <td rowspan="3">—</td>
  </tr>
  <tr>
    <td>2</td>
    <td>1.5 A, 18 W</td>
  </tr>
  <tr>
    <td>3</td>
    <td rowspan="2">3.0 A, 36 W</td>
  </tr>
  <tr>
    <td>4</td>
    <td>3.0 A, 60 W</td>
  </tr>
  <tr>
    <td>5</td>
    <td>5.0 A, 60 W</td>
    <td>5.0 A, 100 W</td>
  </tr>
</tbody>
</table>

Perfiles USB Power Delivery <ins>Rev.2.0/3.x</ins>

<table>
<thead>
  <tr>
    <th colspan="2" rowspan="2">Salida en W</th>
    <th colspan="7">Corriente (A), a:</th>
  </tr>
  <tr>
    <th>+5 V</th>
    <th>+9 V</th>
    <th>+15 V</th>
    <th>+20 V</th>
    <th>+28 V</th>
    <th>+36 V</th>
    <th>+48 V</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="5">Standard Power Range (SPR)</td>
    <td>0.5–15</td>
    <td>0.1–3.0</td>
    <td>—</td>
    <td rowspan="2">—</td>
    <td rowspan="3">—</td>
    <td rowspan="5">—</td>
    <td rowspan="6">—</td>
    <td rowspan="7">—</td>
  </tr>
  <tr>
    <td>15–27</td>
    <td rowspan="7">3.0 (15 W)</td>
    <td>1.67–3.0</td>
  </tr>
  <tr>
    <td>27–45</td>
    <td rowspan="6">3.0 (27 W)</td>
    <td>1.8–3.0</td>
  </tr>
  <tr>
    <td>45–60</td>
    <td rowspan="5">3.0 (45 W)</td>
    <td>2.25–3.0</td>
  </tr>
  <tr>
    <td>60–100</td>
    <td>3.0–5.0[B]</td>
  </tr>
  <tr>
    <td rowspan="3">Extended Power Range (EPR)</td>
    <td>100–140</td>
    <td>3.0 (60 W),</td>
    <td>3.57–5.0</td>
  </tr>
  <tr>
    <td>140–180</td>
    <td>5.0 (100 W)[B]</td>
    <td rowspan="2">5.0 (140 W)</td>
    <td>3.89–5.0</td>
  </tr>
  <tr>
    <td>180–240</td>
    <td></td>
    <td>5.0 (180 W)</td>
    <td>3.75–5.0</td>
  </tr>
</tbody>
</table>

## Thunderbolt

TB1 - 20 Gbps (2 canales de 10Gbps)
TB2 - 20 Gbps (2 canales de 10Gbps)
TB3 - 40 Gpbs
TB4 - 40 Gbps

## Thunderbolt - USB 4

Thunderbolt 4 y USB4 son compatibles funcionalmente y complementarios. TB4 está destinado principalmente a dispositivos "grandes" (ordenadores) y USB4 para más tipos de dispositivos, como móviles, aparte de ordenadores.

<table>
<thead>
  <tr>
    <th>Requisito mínimo</th>
    <th>TB3</th>
    <th>TB4</th>
    <th>USB4</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Soporte USB4</td>
    <td>No</td>
    <td>Sí</td>
    <td>Sí</td>
  </tr>
  <tr>
    <td>Soporte USB3</td>
    <td>10Gb/s</td>
    <td>10Gb/s</td>
    <td>10Gb/s</td>
  </tr>
  <tr>
    <td>Soporte USB2</td>
    <td>Sí</td>
    <td>Sí</td>
    <td>Sí</td>
  </tr>
  <tr>
    <td>Compatible TB3</td>
    <td>Sí</td>
    <td>Sí</td>
    <td>Opcional</td>
  </tr>
  <tr>
    <td>Espacificación USB4</td>
    <td>Compatible</td>
    <td>Cumple</td>
    <td>Cumple</td>
  </tr>
</tbody>
</table>

## Telefonía móvil (digital)

<table>
<thead>
  <tr>
    <th></th>
    <th>Descarga</th>
    <th>Subida</th>
    <th>Otros</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>GSM CSD</td>
    <td>14.4 kbit/s</td>
    <td>14.4 kbit/s</td>
    <td>2G</td>
  </tr>
  <tr>
    <td>GPRS</td>
    <td>57.6 kbit/s</td>
    <td>28.8 kbit/s</td>
    <td>2.5G</td>
  </tr>
  <tr>
    <td>CDMA2000 1×RTT</td>
    <td>153 kbit/s</td>
    <td>153 kbit/s</td>
    <td>3G</td>
  </tr>
  <tr>
    <td>EDGE (type 1 MS)</td>
    <td>236.8 kbit/s</td>
    <td>236.8 kbit/s</td>
    <td>2.75G</td>
  </tr>
  <tr>
    <td>UMTS</td>
    <td>384 kbit/s</td>
    <td>384 kbit/s</td>
    <td>3G</td>
  </tr>
  <tr>
    <td>EDGE (type 2 MS)</td>
    <td>473.6 kbit/s</td>
    <td>473.6 kbit/s</td>
    <td>3G</td>
  </tr>
  <tr>
    <td>EDGE Evolution (type 1 MS)</td>
    <td>1184 kbit/s</td>
    <td>474 kbit/s</td>
    <td>3G</td>
  </tr>
  <tr>
    <td>EDGE Evolution (type 2 MS)</td>
    <td>1894 kbit/s</td>
    <td>947 kbit/s</td>
    <td>3G</td>
  </tr>
  <tr>
    <td>LTE Cat 1</td>
    <td>10 Mbit/s</td>
    <td>5.2 Mbit/s</td>
    <td>4G</td>
  </tr>
  <tr>
    <td>HSPA </td>
    <td>13.98 Mbit/s</td>
    <td>5.760 Mbit/s</td>
    <td>3.5G</td>
  </tr>
  <tr>
    <td>HSPA+ </td>
    <td>42 Mbit/s</td>
    <td>11.5 Mbit/s</td>
    <td>3.75G</td>
  </tr>
  <tr>
    <td>LTE Cat 2 - Cat 21</td>
    <td>50 Mbit/s - 3.9 Gbit/s</td>
    <td>25 Mbit/s - 1.5 Gbit/s</td>
    <td>4G</td>
  </tr>
  <tr>
    <td>5G NR (teórico)</td>
    <td>1-10 Gbit/s</td>
    <td>Similar a max. LTE</td>
    <td>Baja latencia</td>
  </tr>
</tbody>
</table>

## Wifi

<table>
<thead>
  <tr>
    <th>Generation</th>
    <th>Estándar IEEE</th>
    <th>Fecha</th>
    <th>Velocidad máx. enlace (Mbit/s)</th>
    <th>Frecuencia radio (GHz)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Wi-Fi 7</td>
    <td>802.11be</td>
    <td>Est. 2024</td>
    <td>1376 - 46120</td>
    <td>2.4/5/6</td>
  </tr>
  <tr>
    <td>Wi-Fi 6E</td>
    <td rowspan="2">802.11ax</td>
    <td>2020</td>
    <td rowspan="2">574 - 9608</td>
    <td>6</td>
  </tr>
  <tr>
    <td>Wi-Fi 6</td>
    <td>2019</td>
    <td>2.4/5</td>
  </tr>
  <tr>
    <td>Wi-Fi 5</td>
    <td>802.11ac</td>
    <td>2014</td>
    <td>433 - 6933</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Wi-Fi 4</td>
    <td>802.11n</td>
    <td>2008</td>
    <td>72 - 600</td>
    <td>2.4/5</td>
  </tr>
  <tr>
    <td>Wi-Fi 3</td>
    <td>802.11g</td>
    <td>2003</td>
    <td>6 a 54</td>
    <td>2.4</td>
  </tr>
  <tr>
    <td>Wi-Fi 2</td>
    <td>802.11a</td>
    <td>1999</td>
    <td>6 a 54</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Wi-Fi 1</td>
    <td>802.11b</td>
    <td>1999</td>
    <td>1 a 11</td>
    <td>2.4</td>
  </tr>
  <tr>
    <td>Wi-Fi 0</td>
    <td>802.11</td>
    <td>1997</td>
    <td>1 a 2</td>
    <td>2.4</td>
  </tr>
</tbody>
</table>

## Buses almacenamiento (PASAR)

<table>
<thead>
  <tr>
    <th>ATA PIO&nbsp;&nbsp;&nbsp;Mode 0</th>
    <th>26.4 Mbit/s</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>SCSI&nbsp;&nbsp;&nbsp;(Narrow SCSI) (5 MHz)</td>
    <td>40 Mbit/s</td>
  </tr>
  <tr>
    <td>ATA PIO Mode 1</td>
    <td>41.6 Mbit/s</td>
  </tr>
  <tr>
    <td>ATA PIO Mode 2</td>
    <td>66.4 Mbit/s</td>
  </tr>
  <tr>
    <td>Fast SCSI (8 bits/10 MHz)</td>
    <td>80 Mbit/s</td>
  </tr>
  <tr>
    <td>ATA PIO Mode 3</td>
    <td>88.8 Mbit/s</td>
  </tr>
  <tr>
    <td>ATA PIO Mode 4</td>
    <td>133.3 Mbit/s</td>
  </tr>
  <tr>
    <td>Fast Wide SCSI (16 bits/10 MHz)</td>
    <td>160 Mbit/s</td>
  </tr>
  <tr>
    <td>Ultra SCSI (Fast-20 SCSI) (8&nbsp;&nbsp;&nbsp;bits/20 MHz)</td>
    <td>160 Mbit/s</td>
  </tr>
  <tr>
    <td>SD (High Speed)</td>
    <td>200 Mbit/s</td>
  </tr>
  <tr>
    <td>Ultra&nbsp;&nbsp;&nbsp;DMA ATA 33</td>
    <td>264 Mbit/s</td>
  </tr>
  <tr>
    <td>Ultra Wide SCSI (16 bits/20 MHz)</td>
    <td>320 Mbit/s</td>
  </tr>
  <tr>
    <td>Ultra DMA ATA 66</td>
    <td>533.6 Mbit/s</td>
  </tr>
  <tr>
    <td>Ultra-2 wide SCSI (16 bits/40 MHz)</td>
    <td>640 Mbit/s</td>
  </tr>
  <tr>
    <td>Ultra DMA ATA 100</td>
    <td>800 Mbit/s</td>
  </tr>
  <tr>
    <td>Fibre&nbsp;&nbsp;&nbsp;Channel 1GFC (1.0625 GHz)</td>
    <td>850 Mbit/s</td>
  </tr>
  <tr>
    <td>AoE over&nbsp;&nbsp;&nbsp;gigabit Ethernet, jumbo frames</td>
    <td>1 Gbit/s</td>
  </tr>
  <tr>
    <td>iSCSI&nbsp;&nbsp;&nbsp;over gigabit Ethernet, jumbo frames</td>
    <td>1 Gbit/s</td>
  </tr>
  <tr>
    <td>Ultra DMA ATA 133</td>
    <td>1.064 Gbit/s</td>
  </tr>
  <tr>
    <td>Ultra-3 SCSI (Ultra 160 SCSI; Fast-80&nbsp;&nbsp;&nbsp;Wide SCSI) (16 bits/40 MHz DDR)</td>
    <td>1.28 Gbit/s</td>
  </tr>
  <tr>
    <td>SATA&nbsp;&nbsp;&nbsp;revision 1.0</td>
    <td>1.500 Gbit/s</td>
  </tr>
  <tr>
    <td>Fibre&nbsp;&nbsp;&nbsp;Channel 2GFC (2.125 GHz)</td>
    <td>1.700 Gbit/s</td>
  </tr>
  <tr>
    <td>Ultra-320 SCSI (Ultra4 SCSI) (16&nbsp;&nbsp;&nbsp;bits/80 MHz DDR)</td>
    <td>2.560 Gbit/s</td>
  </tr>
  <tr>
    <td>Serial&nbsp;&nbsp;&nbsp;Attached SCSI (SAS) SAS-1</td>
    <td>3 Gbit/s</td>
  </tr>
  <tr>
    <td>SATA&nbsp;&nbsp;&nbsp;Revision 2.0</td>
    <td>3 Gbit/s</td>
  </tr>
  <tr>
    <td>Fibre&nbsp;&nbsp;&nbsp;Channel 4GFC (4.25 GHz)</td>
    <td>3.4 Gbit/s</td>
  </tr>
  <tr>
    <td>Serial&nbsp;&nbsp;&nbsp;Attached SCSI (SAS) SAS-2</td>
    <td>6 Gbit/s</td>
  </tr>
  <tr>
    <td>SATA&nbsp;&nbsp;&nbsp;Revision 3.0</td>
    <td>6 Gbit/s</td>
  </tr>
  <tr>
    <td>Fibre&nbsp;&nbsp;&nbsp;Channel 8GFC (8.50 GHz)</td>
    <td>6.8 Gbit/s</td>
  </tr>
  <tr>
    <td>Serial&nbsp;&nbsp;&nbsp;Attached SCSI (SAS) SAS-3</td>
    <td>12 Gbit/s</td>
  </tr>
  <tr>
    <td>SATA Express</td>
    <td>16 Gbit/s</td>
  </tr>
  <tr>
    <td>Serial Attached SCSI (SAS) 4</td>
    <td>22.5 Gbit/s</td>
  </tr>
  <tr>
    <td>UFS (version 3.0)</td>
    <td>23.2 Gbit/s</td>
  </tr>
  <tr>
    <td>NVMe&nbsp;&nbsp;&nbsp;over M.2 or U.2 (using PCI Express 3.0 ×4 link)</td>
    <td>32 Gbit/s</td>
  </tr>
  <tr>
    <td>iSCSI&nbsp;&nbsp;&nbsp;over InfiniBand 4×</td>
    <td>32 Gbit/s</td>
  </tr>
  <tr>
    <td>NVMe&nbsp;&nbsp;&nbsp;over M.2 or U.2 (using PCI Express 4.0 ×4 link)</td>
    <td>64 Gbit/s</td>
  </tr>
  <tr>
    <td>NVMe&nbsp;&nbsp;&nbsp;over M.2, U.2, U.3 or EDSFF (using PCI Express 5.0 ×4 link)</td>
    <td>128 Gbit/s</td>
  </tr>
</tbody>
</table>

## Códigos HTTP

<table>
<thead>
  <tr>
    <th colspan="2">1xx Informativas</th>
    <th></th>
    <th colspan="2">5xx Errores del Servidor</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>100</td>
    <td>Continue</td>
    <td></td>
    <td>500</td>
    <td>Internal Server Error</td>
  </tr>
  <tr>
    <td>101</td>
    <td>Switching Protocols</td>
    <td></td>
    <td>501</td>
    <td>Not Implemented</td>
  </tr>
  <tr>
    <td>102</td>
    <td>Processing</td>
    <td></td>
    <td>502</td>
    <td>Bad Gateway</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>503</td>
    <td>Service Unavailable</td>
  </tr>
  <tr>
    <td colspan="2"><strong><center>2xx Correctas</strong></center></td>
    <td></td>
    <td>504</td>
    <td>Gateway Timeout</td>
  </tr>
  <tr>
    <td>200</td>
    <td>OK</td>
    <td></td>
    <td>505</td>
    <td>HTTP Version Not Supported</td>
  </tr>
  <tr>
    <td>201</td>
    <td>Created</td>
    <td></td>
    <td>506</td>
    <td>Variant Also Negotiates</td>
  </tr>
  <tr>
    <td>202</td>
    <td>Accepted</td>
    <td></td>
    <td>507</td>
    <td>Insufficient Storage</td>
  </tr>
  <tr>
    <td>203</td>
    <td>Non-authoritative Information</td>
    <td></td>
    <td>508</td>
    <td>Loop Detected</td>
  </tr>
  <tr>
    <td>204</td>
    <td>No Content</td>
    <td></td>
    <td>510</td>
    <td>Not Extended</td>
  </tr>
  <tr>
    <td>205</td>
    <td>Reset Content</td>
    <td></td>
    <td>511</td>
    <td>Network Authentication Required</td>
  </tr>
  <tr>
    <td>206</td>
    <td>Partial Content</td>
    <td></td>
    <td>599</td>
    <td>Network Connect Timeour Error</td>
  </tr>
  <tr>
    <td>207</td>
    <td>Multi-Status</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>208</td>
    <td>Already Reported</td>
    <td></td>
    <td colspan="2"><strong><center>4xx Errores del cliente (cont)</center></strong></td>
  </tr>
  <tr>
    <td>226</td>
    <td>IM Used</td>
    <td></td>
    <td>409</td>
    <td>Conflict</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>410</td>
    <td>Gone</td>
  </tr>
  <tr>
    <td colspan="2"><strong><center>3xx Redirección</center></strong></td>
    <td></td>
    <td>411</td>
    <td>Length Required</td>
  </tr>
  <tr>
    <td>300</td>
    <td>Multiple Choices</td>
    <td></td>
    <td>412</td>
    <td>Precondition Failed</td>
  </tr>
  <tr>
    <td>301</td>
    <td>Moved Permanently</td>
    <td></td>
    <td>413</td>
    <td>Request Entity Too Large</td>
  </tr>
  <tr>
    <td>302</td>
    <td>Found</td>
    <td></td>
    <td>414</td>
    <td>URI Too Long</td>
  </tr>
  <tr>
    <td>303</td>
    <td>See Other</td>
    <td></td>
    <td>415</td>
    <td>Unsupported Media Type</td>
  </tr>
  <tr>
    <td>304</td>
    <td>Not Modified</td>
    <td></td>
    <td>416</td>
    <td>Requested Range Not Satisfiable</td>
  </tr>
  <tr>
    <td>305</td>
    <td>Use Proxy</td>
    <td></td>
    <td>417</td>
    <td>Expectation Failed</td>
  </tr>
  <tr>
    <td>306</td>
    <td>Switch Proxy</td>
    <td></td>
    <td>418</td>
    <td>I'm a teapot</td>
  </tr>
  <tr>
    <td>307</td>
    <td>Temporary Redirect</td>
    <td></td>
    <td>421</td>
    <td>Misdirected Request</td>
  </tr>
  <tr>
    <td>308</td>
    <td>Permanent Redirect</td>
    <td></td>
    <td>422</td>
    <td>Unprocessable Entity</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td>423</td>
    <td>Locked</td>
  </tr>
  <tr>
    <td colspan="2"><strong><center>4xx Errores del cliente</center></strong></td>
    <td></td>
    <td>424</td>
    <td>Failed Dependency</td>
  </tr>
  <tr>
    <td>400</td>
    <td>Bad Request</td>
    <td></td>
    <td>425</td>
    <td>&lt;sin asignar&gt;</td>
  </tr>
  <tr>
    <td>401</td>
    <td>Unauthorized</td>
    <td></td>
    <td>426</td>
    <td>Upgrade Required</td>
  </tr>
  <tr>
    <td>402</td>
    <td>Payment Required</td>
    <td></td>
    <td>428</td>
    <td>Precondition Required</td>
  </tr>
  <tr>
    <td>403</td>
    <td>Forbidden</td>
    <td></td>
    <td>429</td>
    <td>Too Many Requests</td>
  </tr>
  <tr>
    <td>404</td>
    <td>Not Found</td>
    <td></td>
    <td>431</td>
    <td>Request Header Fields Too Large</td>
  </tr>
  <tr>
    <td>405</td>
    <td>Method Not Allowed</td>
    <td></td>
    <td>444</td>
    <td>Connection Closed Without Response</td>
  </tr>
  <tr>
    <td>406</td>
    <td>Not Acceptable</td>
    <td></td>
    <td>451</td>
    <td>Unavailable for Legal Reasons</td>
  </tr>
  <tr>
    <td>407</td>
    <td>Proxy Authentication Required</td>
    <td></td>
    <td>499</td>
    <td>Client Closed Request</td>
  </tr>
  <tr>
    <td>408</td>
    <td>Request Timeout</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>

## CCN

<table>
<thead>
  <tr>
    <th>Aplicación</th>
    <th>Uso</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>ADA</td>
    <td>Análisis avanzado malware</td>
  </tr>
  <tr>
    <td>Amparo</td>
    <td>Implantación de seguridad y conformidad ENS</td>
  </tr>
  <tr>
    <td>Ana</td>
    <td>Automatización normalización auditorías</td>
  </tr>
  <tr>
    <td>Carla</td>
    <td>Protección y traza del dato</td>
  </tr>
  <tr>
    <td>Carmen</td>
    <td>Defensa amenazas persistentes avanzadas (APT)</td>
  </tr>
  <tr>
    <td>CCNDroid Wiper</td>
    <td>Borrado seguro Android</td>
  </tr>
  <tr>
    <td>CCNDroid Crypter</td>
    <td>Cifrado ficheros Android</td>
  </tr>
  <tr>
    <td>Clara</td>
    <td>Auditoría de Cumplimiento ENS/STIC Windows y Linux</td>
  </tr>
  <tr>
    <td>Claudia</td>
    <td>Detección amenazas puesto trabajo. Endpoint integrado con Carmen</td>
  </tr>
  <tr>
    <td>microClaudia</td>
    <td>Protección contra ransomware Windows</td>
  </tr>
  <tr>
    <td>Elena</td>
    <td>Simulador de Técnicas de Cibervigilancia (Cyber range)</td>
  </tr>
  <tr>
    <td>Emma</td>
    <td>Control de acceso a las infraestructuras de red</td>
  </tr>
  <tr>
    <td>Gloria</td>
    <td>SIEM. Gestión de incidentes y amenazas de ciberseguridad</td>
  </tr>
  <tr>
    <td>INES</td>
    <td>Informe de Estado de Seguridad en el ENS</td>
  </tr>
  <tr>
    <td>IRIS</td>
    <td>Estado en tiempor real de la ciberseguridad del sector público y la&nbsp;&nbsp;&nbsp;situación de la ciberamenaza a nivel nacional</td>
  </tr>
  <tr>
    <td>Loreto</td>
    <td>Almacenamiento en la nube</td>
  </tr>
  <tr>
    <td>Lucía</td>
    <td>Gestión de Ciberincidentes</td>
  </tr>
  <tr>
    <td>Marta</td>
    <td>Nulti sandbox para análisis automatizado ficheros</td>
  </tr>
  <tr>
    <td>Mónica</td>
    <td>Gestión de eventos e información de seguridad</td>
  </tr>
  <tr>
    <td>Olvido</td>
    <td>Borrado seguro disco y sistemas de archivos</td>
  </tr>
  <tr>
    <td>Pilar</td>
    <td>Análisis y gestión riesgos (Pilar, Pilar Basic, Pico Pilar, RMAT)</td>
  </tr>
  <tr>
    <td>Reyes</td>
    <td>Intercambio de Información de Ciberamenazas</td>
  </tr>
  <tr>
    <td>Rocío</td>
    <td>Inspección de Operación. Auditoría de configuraciones de&nbsp;&nbsp;&nbsp;&lt;ins&gt;dispositivos de red&lt;/ins&gt;</td>
  </tr>
  <tr>
    <td>Vanesa</td>
    <td>Grabaciones y emisiones de vídeo en streaming</td>
  </tr>
</tbody>
</table>
