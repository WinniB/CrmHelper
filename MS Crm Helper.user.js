// ==UserScript==
// @name         MS Crm Helper
// @namespace    https://github.com/WinniB
// @version      0.4.5
// @description  Helper for MS Crm/Dynamics
// @author       WinniB
// @match        https://your-crm-url-here.com/*
// @grant        GM_notification
// @noframes
// ==/UserScript==

var iconImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QD4RXhpZgAATU0AKgAAAAgABgEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAExAAIAAAAQAAAAZgEyAAIAAAAUAAAAdodpAAQAAAABAAAAigAAALYAAAEsAAAAAQAAASwAAAABcGFpbnQubmV0IDQuMC41ADIwMTc6MTE6MTMgMjI6NTI6MDQAAAOgAQADAAAAAf//AACgAgAEAAAAAQAAASCgAwAEAAAAAQAAAGkAAAAAAAAAAwEaAAUAAAABAAAA4AEbAAUAAAABAAAA6AEoAAMAAAABAAIAAAAAAAAAAABIAAAAAQAAAEgAAAAB/9sAQwAEAgMDAwIEAwMDBAQEBAUJBgUFBQULCAgGCQ0LDQ0NCwwMDhAUEQ4PEw8MDBIYEhMVFhcXFw4RGRsZFhoUFhcW/9sAQwEEBAQFBQUKBgYKFg8MDxYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYW/8AAEQgAIwBiAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+2fi5488M/DXwDqHjHxbqC2Wl6dHukfGXkY8LGi/xOx4A/pzX5oftC/t3fFrxrrFxbeB7v8A4QzQgxECWiq97KvZpJmB2nviPbjOMt1rtP8AgsX8QZtY+MXh/wCF7ai1po+kQR3l+VUsBPMfvso+9siwQOvzt61Q8H/s7fsz/Ef4GeOPGfw28WfEN7rwbpUtzLLqy2yQNMsEkoHliEMVPlnIDgjI5oNZx5LLrv8Afr+R8+6P+0V8eNM1Jb62+L3jKSVDkLdazNcRfjHKzIfxFfYX7FP7d1zr/iKz8E/Gj7HBPeMsNl4jgjEMbSHAC3KD5V3HjzFwoJGVAyw8X+C37Jttrn7HPiz42eNL3VbGa10i6v8Aw5Y2rIizJDGzCafejEo7LgKu07RuzhhXnXjj4U+HfA37LPh3xr4pu9SXxr42u2n0LS4pUSCDTExm5nQoXJcn5MMoIcHnBFBmj9nKK+EvAf7ZOqeAv2HfBPiS88Mz+JtZ/tCbw/cTTXJhhT7MqsrySBWJdonjAH8RV2zxg/Y3wX8Yp8QfhR4f8bR6XcaYuvafFeCzuDl4d4ztzgbh6NgZBBwM0DlHldjp6KKKCQoqpr18NL0O91Nrea4WztpJzDAu6STYpbag7scYA9a+YP2Yf2sPFfx30vxtp/hP4bQWPiHQ7EXGkLdaiZLOZnfYi3D7EKkH5iB94KwG0jkA+qqK+P8AWfiv+19pHjWz8H6ovwFs/EGoqr2elT6nOl1cKxYKUiNxuYEqw4H8J9K5/wCL37T37TnwQ8YeHbb4s+APAlzp2vSOIF0KSfzphGyCRUZpn2uPMTG5CDuGO9AH3BRTY23xq+Cu4A4I5H1ooA/K3/gr54du9L/asn1uVG8jW9NtZomxxhIxCR+cTV7F/wAEudE8PTfsP/Eu68X3psNB1PUrq21W53bdtmllD5pBHI+WWQZHOenNfQH7d3wEt/jj8MFtrLy4vEWj75dLlc7RJnG6Fm7BsKQexA7E1+WPjyz+KvgDT9Q+G2tXviPTNKW4Ml3ojXM0dq8nHzvBnYSdqkMQc4BBPBqb20Z31aMq9NVqSvZJSXVWVr+jVte90foZ+yZ8QdH+Ofwn+L134lC6P4Hjl/sq0swwij0zR47TGwY4Q7NzMR0LHHAFfn5+1V8UJ/i38aNS8UJD9l0mILY6HYhdq2VhFlYYwo4XjLEDjczYrktH8UeLdO8N33hnSvEOsWukaowN9plteypb3ZGMGSJTtc8DqD0r0X9nH4F614+1B9a11xoHg/Sj5usa3ejbDbxjkqufvyHosY+YkjoOabaRjh8LVrytBadX0X9dt3stT0X4B/ErxV4C+G3w9+F2jT6HZx+OvEEuqapNrljDcW8Vo8sNtFKfOG1Qpt7lif8AZFfSn7ZX7Ueu+FfjZ4F8C/CDVbPVoNQCy6v/AGPbQ6lLOjzCNIYACV8wLHKduR99c4FfNvxM+LK6t4iW30Dwv4XXw7pMCWGhW+seFtOv7i3tIxhQ0s8LuWY7pGG4jdI2Kj8G/GP4haJrsOp+FLHwzp+pwxeRDc6Z4M0yKdIzxsVo7YMF5PArL2sT6ipwhj6j51KKWmjbulbrpv38z6L/AGaf2mvH3jr9rzxNpHj3XvDvhDwj4dtbiJ9HmntgouVlWNU+1PhpJAfMJKHYdpwMEGuOj/bR+KVx48+KeqaDplprXhbw3Dcf2MfsyR2loonEcNxc3AwzbgpCxA5d5AAQASPPtNh+NPiLUn1az+EGl6hdXExmkvR8L9PdpJCclzIbTliTnJOc16H4U8F/tY3PhC58K6b8PNA0/wAP37h7vTJvDeiWtpOwIIaSBowGOVU8qeQPSq9p5HFU4aq0vjxFJesv+Ad78B/2mNdg/Ye8SfEz4ieONB1Hxd/p0+jaeGtoZ0UYht42t48MR5wY5IyUYEkjmu5/4J2/EZ/GfwXg1fxbr/hT/hKPEF/c3Q07TUtrW4ESHYDJDHhmc+W7liM7WFeU+Ff2c/2gjb3EP9k/CLRYb6IRXcb+FtL/AH0e4NscRWTBhlVOCcZA9K774afs4fFHwxeSX1h488B+HLq4hMM8uhfDvTleSM9ULiKMlTjoeKrmv0OCpllOnviafycn+UWePfs7+NfBvxB/4KEePPjd4y8V6LpWheFYntNBk1LUYrdXGDbxPGHYbgYkmc46NKPUV0P7CH2r44/tLeOfiL8Qo38aWvhe8WDwhrt1A0VnagTS4+z2/EYYoI3yQWQ4JOWyfX/Df7KPhe0dZNVvPD91IpyGs/h9oNtz+No5/WvcPB+i2/h3w7a6NaytLDaqVjYwQw8ZJxshRI1Az/Co/PmqOCpTjD4ZqXpf9UjTooooMQrm/iF4D8GeOLNbXxd4Y0zWEQERtdW6s8eeux/vL+BFFFG5UKk6clKDs/I4fSv2ZPgTpuoLeW3w609pFbOLi4nnj/FJJGU/lXWeMPhh4B8U6LY6LrvhexutM0wk2dioaK3hOMZEaELnHTjjJx1NFFCiuxvLHYqclKVWTa2d3oQ6J8IPhVpJX+z/AIc+F4WXo/8AZMLN/wB9MpP6112n2FjYQLBY2VvaxL91IIlRR9ABRRQjKpWq1Pjk36ssYHpRRRQZhRRRQAUUUUAFFFFAH//Z";

unsafeWindow.onkeydown = function (event) {
    //Shortcut for key (alt + h or alt + ^)
    if (event.altKey && event.which == 72 || event.altKey && event.which == 220) {
        ShowHelpPage();
    }

    //Shortcut for key (alt + 1)
    if (event.altKey && event.which == 49) {
        window.prompt('Record ID:', GetCrmEnityGuid());
    }

    //Shortcut for key (alt + 2)
    if (event.altKey && event.which == 50) {
        ShowSchemaNames();
    }

    //Shortcut for key (alt + 3)
    if (event.altKey && event.which == 51) {
        ShowDirtyElements();
    }

    //Shortcut for key (alt + 4)
    if (event.altKey && event.which == 52) {
        SwitchFormFields(true);
    }

    //Shortcut for key (alt + 5)
    if (event.altKey && event.which == 53) {
        CopyRecordLink();
    }

    //Shortcut for key (alt + 6)
    if (event.altKey && event.which == 54) {
        GetAllOptionsets();
    }

    //Shortcut for key (alt + 7)
    if (event.altKey && event.which == 55) {
        ShowPerformanceCenter();
    }

    //Shortcut for key (alt + 8)
    if (event.altKey && event.which == 56) {
        ShowPropertiesDialog();
    }
	
	//Shortcut for key (alt + ß)
    if (event.altKey && event.which == 219){
        OpenCurrentsUserSettings();
    }

    //Shortcut for key (alt + ´)
    if (event.altKey && event.which == 221){
        OpenCustomizations();
    }
	
    //Shortcut for key (alt + -)
    if (event.altKey && event.which == 189){
        ShowEntityName();
    }
};

function OpenCustomizations(){
    var url = Xrm.Page.context.getClientUrl() + "/tools/systemcustomization/systemcustomization.aspx?pagemode=iframe&sitemappath=Settings%7cCustomizations%7cnav_syscust#";
    window.open(url);
}

function OpenCurrentsUserSettings(){
    var userId = Xrm.Page.context.getUserId();
    var url = Xrm.Page.context.getClientUrl() + "/main.aspx?etn=systemuser&id=" + userId + "&pagetype=entityrecord";
    window.open(url,"_self");
}

function ShowHelpPage() {
    var title = "<a href='https://github.com/WinniB' target='_blank'><img src='" + iconImage + "' style='float: left; padding-right: 10px; margin-left: 5px;'></a> <h2 style='margin-bottom: 10px; margin-top: 0px; padding-top: 10px;'>CRM Tampermonkey Script</h2>";
    var preTable = "<table style='padding-left: 20px; clear: both; padding-top: 5px;'><tr><th style='text-align: left;'>Shortcut</th><th></th><th style='text-align: left;'>Description</th></tr>";
    var postTable = "</table>";
    var preRow = "<tr><td >";
    var midRow = "</td><td style='padding: 1px 15px 1px 5px;'>...</td><td>";
    var postRow = "</td></tr>";

    var rows = preRow + "Alt + 1" + midRow + "get entity GUID" + postRow;
    rows += preRow + "Alt + 2" + midRow + "show/toggle schema names" + postRow;
    rows += preRow + "Alt + 3" + midRow + "show dirty elements on page" + postRow;
    rows += preRow + "Alt + 4" + midRow + "enable all disabled fields" + postRow;
    rows += preRow + "Alt + 5" + midRow + "show/copy record link" + postRow;
    rows += preRow + "Alt + 6" + midRow + "get all optionsets" + postRow;
    rows += preRow + "Alt + 7" + midRow + "show/toggle Performance Center" + postRow;
    rows += preRow + "Alt + 8" + midRow + "show the properties dialog" + postRow;
	
    rows += preRow + "Alt + ß" + midRow + "go to current user's settings page" + postRow;
    rows += preRow + "Alt + ´" + midRow + "open customizations in new tab" + postRow;
    rows += preRow + "Alt + -" + midRow + "show/copy entity name" + postRow;

    var content = title + preTable + rows + postTable;

    OpenNewPage("CRM Tampermonkey script information", content, 650, 380);
}

function OpenNewPage(title, content, width, height) {
    var html = "<html><head><title>" + title + "</title></head>";
    html += "<body bgcolor=white onLoad='self.focus()'>";
    html += content;
    html += "</body></html>";

    top.consoleRef = window.open("", "myconsole", "width=" + width + ",height=" + height + ",menubar=0,toolbar=1,status=0,scrollbars=1,resizable=1");
    top.consoleRef.document.writeln(html);
    top.consoleRef.document.close();
}

function ShowPropertiesDialog() {
    //Author: Aichinger Daniel / AID
    //Datum: 17.05.2017
    //Doku: http://www.magnetismsolutions.com/blog/jaredjohnson/2014/08/03/dynamics-crm-2013-resurrecting-the-form-properties-window-with-bookmarklet
    var id = window.frames[0].Xrm.Page.data.entity.getId();
    var etc = window.frames[0].Xrm.Page.context.getQueryStringParameters().etc;
    window.frames[0].Mscrm.RibbonActions.openFormProperties(id, etc);
}

function ShowPerformanceCenter() {
    Mscrm.Performance.PerformanceCenter.get_instance().TogglePerformanceResultsVisibility();
}

function GetAllOptionsets() {
    var osa = "";
    var form = $("iframe").filter(function () {
        return $(this).css("visibility") == "visible";
    })[0].contentWindow;
    form.Xrm.Page.ui.controls.forEach(function (c, i) {
        if (c.getControlType() == "optionset") {
            var osv = "<h2 style='margin-bottom: 10px;'>Name: " + c.getName() + "</h2>";
            osv += "<table style='padding-left: 20px;'><tr><th style='text-align: left; padding: 1px 6px;'>Value</th><th style='text-align: left; padding: 1px 6px;'>Text</th></tr>";
            frames[0].$("#" + c.getName() + "_i").find("option").first().nextAll().each(function () {
                osv += "<tr><td style='padding: 1px 6px;'>" + $(this).attr("value") + "</td><td style='padding: 1px 6px;'>" + $(this).attr("title") + "</td></tr>";
            });
            osv += "</table>";
            osa += " " + osv + "</br>";
        }
    });
    (window.open("#", "#").document.open()).write(" " + osa + " ");
}

function CopyRecordLink() {
    try {
        var formContext = window.frames[0];
        var id = formContext.Xrm.Page.data.entity.getId(),
            entityName = formContext.Xrm.Page.data.entity.getEntityName(),
            url = formContext.Xrm.Page.context.getClientUrl();
        if (!id) {
            return alert('Failed to find id on this form.');
        }

        url = [url, '/main.aspx?', 'etn=', entityName, '&id=', id, '&pagetype=entityrecord'].join('');

        if (window.clipboardData && window.clipboardData.setData('Text', url)) {
            return;
        }
        else {
            window.prompt('Copy to clipboard: Ctrl+C, Enter', url);
        }
    }
    catch (er) {
        alert('Error occurred while retrieving record url. ' + er.message);
    }
}

function ShowEntityName(){
    try {
        var formContext = window.frames[0];
        var entityName = formContext.Xrm.Page.data.entity.getEntityName();

        if (window.clipboardData && window.clipboardData.setData('Text', entityName)) {
            return;
        }
        else {
            window.prompt('Copy to clipboard: Ctrl+C, Enter', entityName);
        }
    }
    catch(er) {
        alert('Error occurred while retrieving enitity name. '+ er.message);
    }
}

function GetCrmEnityGuid() {
    return window.frames[0].Xrm.Page.data.entity.getId().replace(/^\{+|\}+$/g, "");
}

function ShowSchemaNames() {
    var frame = GetFrame();
    if (frame === null) {
        alert('Please make sure you are on an entity form and try again.');
    }
    else {
        frame.Xrm.Page.ui.controls.forEach(function (a) {
            if (!a.__label) {
                a.__label = a.getLabel();
                a.setLabel(a.getName());
            }
            else {
                a.setLabel(a.__label);
                a.__label = null;
            }
        });
    }
}

function GetFrame() {
    var $iframe = $('#crmContentPanel iframe:not([style*="visibility: hidden"])');
    if ($iframe.length > 0 && $iframe[0].contentWindow.Xrm.Page.ui) {
        return $iframe[0].contentWindow;
    }
    else {
        return null;
    }
}

function ShowDirtyElements() {
    var title = "The following fields are dirty: \n";
    var message = "";
    window.frames[0].Xrm.Page.data.entity.attributes.forEach(
        function (attribute, index) {
            if (attribute.getIsDirty() === true) {
                message += "     \u2219 " + attribute.getName() + "\n";
            }
        }
    );
    if (!message) {
        message = "     {no dirty element found}";
    }
    alert(title + message);
}

function SwitchFormFields(enableFields) {
    window.frames[0].Xrm.Page.ui.controls.forEach(function (control, index) {
        if (doesControlHaveAttribute(control)) {
            control.setDisabled(!enableFields);
        }
    });

    var notificationTitle = "All form fields enabled";
    var text = "All disabled form fields are enabled now!";

    var notificationDetails = {
        text: text,
        title: notificationTitle,
        image: iconImage,
        timeout: 3000,
    };
    GM_notification(notificationDetails);
}

function doesControlHaveAttribute(control) {
    var controlType = control.getControlType();
    return controlType != "iframe" && controlType != "webresource" && controlType != "subgrid";
}

console.log("finished loading MS Crm Helper");
