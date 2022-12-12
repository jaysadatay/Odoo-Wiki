---
tags:
- Best-Practice
prev: ./best-practice
---
# Best Practice: Fertigung mit Subunternehmer

## Szenario

Sie möchten das Produkt *Knusperli* fertigen und müssen dazu einem Subunternehmen den Rohstoff *Zander* schicken.

## Konfiguration 

Zur Vorbereiten müssen Sie die [Vergabe an Subunternehmer aktivieren](Fertigung.md#Vergabe%20an%20Subunternehmer%20aktivieren).
Erstellen Sie Produkte und die Stückliste für die *Knusperli*. Legen Sie auf dieser Stückliste fest, dass Sie die [Fertigung an Subunternehmer vergeben](Fertigung%20Stammdaten.md#Fertigung%20an%20Subunternehmer%20vergeben).
Auf dem Rohstoff *Zander* müssen Sie die [Route zur Versorgung des Subunternehmers festlegen](Fertigung%20Vorgänge.md#Route%20zur%20Versorgung%20des%20Subunternehmers%20festlegen).

## Ausführung manuell

Im Einkauf [erstellen Sie eine Angebotsanfrage](Einkauf.md#Angebotsanfrage%20erstellen) für das *Knusperli* beim Subunternehmer. Wenn Sie die Bestellung bestätigen, werden zwei Aufträge angelegt:
* Anlieferung des Produkts vom Subunternehmer
* Lieferung der Rohstoffe an den Subunternehmer

Erledigen die Lieferung an den Subunternehmer mit [Lieferung ausführen](Lager.md#Lieferung%20ausführen).
Hat der Subunternehmer den Auftrag erledigt, können Sie die [Kompontenten für den Subunternehmen-Auftrag aufzeichnen](Fertigung%20Vorgänge.md#Kompontenten%20für%20Subunternehmen-Auftrag%20aufzeichnen).
Zuletzt können Sie die [Anlieferung bestätigen](Lager.md#Anlieferung%20bestätigen).

Der Traceability-Bericht sieht dann wie folgt aus:

![](assets/Best%20Practice%20Fertigung%20mit%20Subunternehmer.png)