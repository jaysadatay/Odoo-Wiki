---
title: Finanzen Abstimmung
description: Bankkonto mit Odoo abgleichen.
tags:
- HowTo
prev: ./finance
---
# Finanzen Abstimmung
![icons_odoo_account_accountant](attachments/icons_odoo_account_accountant.png)

{{ $frontmatter.description }}

## Konfiguration

### Abstimmung für Konto erlauben

Um die Abstimmung für Buchungszeilen eines bestimmten Kontos zu erlauben, navigieren Sie nach *Finanzen > Konfiguration > Kontenplan*. Suchen Sie das bestimmte Konto und aktivieren Sie Option *Erlaube Abstimmung*.

## Bankauszug

Bank-Beleg und Kontoauszug werden hier synonym verwendet.

### Bank-Belege manuell erfassen

Navigieren Sie nach *Finanzen* und klicken Sie auf das Bank-Journal. Erfassen Sie einen neuen Bankauszug:

* **Referenz**: Eindeutige Kennzeichnung des Belegs
* **Anfangssaldo**: Banksaldo vor Begin der Transaktionen
* **Endsaldo**: Banksaldo nach Ende der Transaktionen
* **Transaktionen**: Erfassen Sie die Banktransaktionen mit Datum, Buchungstext, Partner und Betrag

Bestätigen Sie den Bankauszug.

### Kontoauszug Raiffeisen erstellen

Loggen Sie sich ins eBanking <https://ebanking.raiffeisen.ch> der Raiffeisen ein. Wählen Sie *Vermögen > Kontoauszug* und anschliessend *Download-Icon > Kontodaten-Download*.

![](attachments/Finance%20Reconcile%20eBanking%20Kontodaten%20Raiffeisen.png)

Im Dialog wählen Sie als Format XML (camt.053) und wenn möglich mit Details.

![](attachments/Finance%20Reconcile%20Kontodaten-Download%20Raiffeisen.png)

Klicken Sie auf *Herunterladen* und Sie erhalten eine Datei, die Sie in Odoo importieren können.

### Kontoauszug importieren

Zeigen Sie das Dashboard von *Finanzen* an. Wählen Sie *Import* unter dem Name des Bank-Journal. Laden Sie im Dialog die Datei mit den Kontoauszügen hoch.

![](attachments/Finanzen%20Kontoauszug%20importieren.png)

Anschliessend wird die Datei validiert und die Ansicht zur Abstimmung der Konto-Bewegungen angezeigt.

### Bank-Belege anzeigen

Zeigen Sie die App *Finanzen* an. Klicken Sie rechts vom Bank-Journals auf das Kontext-Menü und wählen Sie *Ansicht > Belege*. Hier werden die importierten Kontoauszüge anzeigt.

### Bank-Beleg entfernen

Zeigen Sie die App *Finanzen* an. Klicken Sie rechts vom Bank-Journals auf das Kontext-Menü und wählen Sie *Ansicht > Belege*. Markieren Sie den Bankauszug und wählen Sie *Aktion > Löschen*.

::: warning
Bereits abgestimmte Positionen müssen zurückgesetzt werden.
:::

## Abstimmung

### Abstimmung durchführen

Öffnen Sie die Übersicht der Journale via *Finanzen* und klicken auf den Knopf *Abstimmung X Positionen* des entsprechenden Journals. Wählen Sie eine Kontobewegung aus und bestimmen Sie die zu verknüpfende Buchungszeile. Bestätigen Sie Abstimmung.

::: tip
Entfernen Sie den Partner-Filter, wenn die gesuchte Buchungszeile nicht vorhanden ist.
:::

### Abstimmung mit manueller Buchung durchführen

Öffnen Sie die Übersicht der Journale via *Finanzen* und klicken auf den Knopf *Abstimmung X Positionen* des entsprechenden Journals. Wählen Sie eine Konto-Bewegung aus und zeigen Sie den Tab *Manuelle Bearbeitung* an. Erstellen Sie eine manuelle Buchung mit Journal, Konto und Buchungstext.

### Abstimmung mit Überzahlung durchführen

Wenn Sie eine Gutschrift erhalten haben und deren Betrag höher ist als der Rechnungsbetrag, müssen Sie zur Abstimmung eine manuelle Buchung erstellen. Wählen Sie dazu die Kontobewegung aus, bestimmen Sie die Buchungszeile der Rechung und wählen Sie den Tab *Manuell Bearbeitung*. Bei Differenzen wird dieser Dialog mit dem verbleibenden Betrag vorbereitet. Wählen Sie ein Ausgleichsmodell oder wählen Sie ein passendes *Konto* aus. Bestätigen Sie den Vorgang. 

![](attachments/Finanzen%20Abstimmung%20mit%20Differenz.png)

### Überfällige Forderungen abstimmen

Navigieren Sie nach *Finanzen > Finanzen > Überfällige Forderungen* und erweitern Sie den Eintrag zu einem Partner. Wählen Sie Ausgleich und anschliessend den offenen Betrag. Erstellen Sie eine Gegenbuchung und schliessen Sie den Vorgang mit *Abstimmung* ab.

### Buchungszeilen abstimmen

Zeigen Sie die Buchungszeilen *Finanzen > Finanzen > Buchungszeilen* an. Filtern Sie die Buchungszeilen nach nicht abgestimmt und markieren Sie die Buchungszeilen zur Abstimmung. Wählen Sie *Aktion > Abstimmen*. Wählen Sie die Gegenbuchung aus.

### Bank-Beleg bestätigen

Gilt bis #Odoo15.

Wenn alle Vorgänge eines Bank-Belegs abgestimmt sind, können Sie den Bank-Beleg bestätigen. Zeigen Sie den Beleg an und wählen Sie die Aktion *Bestätigen*. Odoo prüft die Vorgänge und generiert einen Bericht analog des Kontoauszug.

### Abstimmung zurücksetzen

Navigieren Sie nach *Finanzen* und wählen Sie im Kontext-Menü des Bank-Journals *Ansicht > Vorgänge*. Suchen Sie hier nach einem bestimmten Bankauszug-Vorgang. Wechseln Sie über *Ansicht* in den Dialog für die Abstimmung und wählen Sie *Zurücksetzen*.

![](attachments/Abstimmung%20zurücksetzen.gif)\

## Buchungen

### Buchungssatz von Vorgang aus Bank-Beleg anzeigen

Navigieren Sie nach *Finanzen* und wählen Sie im Kontext-Menü des Bank-Journals *Ansicht > Vorgänge*. Suchen Sie hier nach einem bestimmten Vorgang. Öffnen Sie den Vorgang und wählen Sie *Buchungssatz*.

### Währungsbetrag in Bank-Beleg korrigieren

Zeigen Sie das Dashboard *Finanzen* an und wählen Sie für ein Bank-Journal *Kontext-Menü > Vorgänge*. Suchen Sie hier nach der Zeile mit dem falschen Währungsbetrag und öffnen Sie diese Zeile. Bearbeiten Sie den Betrag.

## Ausgleichsmodell

### Ausgleichsmodell erstellen

Gilt bis #Odoo15:

Navigieren Sie nach *Finanzen > Konfiguration > Ausgleichsmodelle* und erstellen Sie einen neuen Eintrag.

Dazu ein Beispiel zur Rundungsdifferenz:

![](attachments/Finanzen%20Abstimmung%20Rundungsdifferenz.png)

Dieses Ausgleichsmodell können Sie in der Abstimmung mit einem Knopfdruck anwenden:

![](attachments/Finanzen%20Abstimmung%20Ausgleichsmodell%20anwenden.png)

### Ausgleichsmodell 5% Unterbezahlung erstellen

Gilt bis #Odoo16:

Navigieren Sie nach *Finanzen > Konfiguration > Ausgleichsmodelle* und erstellen Sie einen neuen Eintrag.

* **Name**: Rechnung bis 5% Unterbezahlung
* **Typ**: Regel zum Abgleich von Rechnungen
* **Zahlungstoleranz**: 5%
* **Match Invoice/bill with**: Buchungstext und Referenz

## Auswertung

### Offene Rechnungen nach Abgleich anzeigen

Navigieren Sie nach *Finanzen > Finanzen > Buchungszeilen. Filtern Sie die Zeilen gemäss diesen Bedingungen:

* Abgleich Nr. ist gesetzt
* Offener Betrag ist grösser 0

Sie erhalten so eine Übersicht der Rechnungen mit Unterbezahlung.

![](attachments/Offene%20Rechnungszeilen%20nach%20Abgleich%20anzeigen.png)
