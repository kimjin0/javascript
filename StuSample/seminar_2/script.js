"use strict";

// 한글은 2자로 계산되는 문자 길이 계산 : https://juein.tistory.com/44 참고
function strLen(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length == 6) {
            len++;
        }
        len++;
    }
    return len;
}

function Seminar(title, cost, region, pos, file) {
    return { title, cost, region, pos, file };
}
class ListManager {
    #table;
    #tbody;
    constructor() {
        this.table = document.getElementById("list");
        this.tbody = document.querySelector("#list tbody");
    }

    add(seminar) {
        this.table.hidden = false;
        this.tbody.innerHTML += `
    <tr>
      <td class="title">${seminar.title}</td>
      <td>${seminar.pos}</td>
      <td>${seminar.region}</td>
      <td>${seminar.cost}</td>
      ${
          seminar.file != ""
              ? `<td data-info-file=${seminar.file}><a class="ico-down" href="#"/></td>`
              : "<td></td>"
      }\
      <td><a class="ico-trash" href="#"' /></td>
    </tr>`;
    }

    remove(idx) {
        this.tbody.rows[idx]?.remove();
        if (this.tbody.rows.length == 0) {
            this.table.hidden = true;
        }
    }

    getSeminar(idx) {
        let cells = this.tbody.rows[idx].cells;
        return Seminar(
            cells[0].textContent,
            cells[3].textContent,
            cells[2].textContent,
            cells[1].textContent,
            cells[4].dataset.infoFile
        );
    }
}

class EditManager {
    #title;
    #titleLen;
    #cost; //array
    #region;
    #pos; //array
    #path;
    #browse;

    constructor() {
        this.title = document.getElementById("title");
        this.titleLen = document.getElementById("titleLen");
        this.cost = document.querySelectorAll("#cost input");
        this.region = document.getElementById("region");
        this.pos = document.querySelectorAll("#pos input");
        this.path = document.getElementById("path");
        this.browse = document.getElementById("browse");
        this.newEdit();

        this.browse.addEventListener("change", this.onChangeFile.bind(this));
        this.title.addEventListener("input", this.onInput.bind(this));
        document.addEventListener("click", this.onClick.bind(this));
    }

    newEdit() {
        this.title.value = "";
        this.titleLen.textContent = "( 0 / 200 )";
        for (let cost of this.cost) {
            cost.checked = false;
        }
        this.region.selectedIndex = 0;
        for (let pos of this.pos) {
            pos.checked = false;
        }
        this.path.textContent = "파일첨부";
    }

    onInput(e) {
        this.titleLen.textContent = `( ${strLen(this.title.value)} / 200 )`;
    }
    submit() {
        let seminar = {};
        seminar.title = this.title.value;
        if (seminar.title == "") {
            alert("세미나 주제를 입력하세요.");
            return false;
        }
        if (strLen(seminar.title) > 200) {
            alert("세미나 주제는 200자를 넘을 수 없습니다.");
            return false;
        }
        seminar.cost = "";
        for (let radio of this.cost) {
            if (radio.checked)
                seminar.cost = radio.nextElementSibling.textContent;
        }
        if (seminar.cost == "") {
            alert("참가비 여부를 선택하세요.");
            return false;
        }
        seminar.region = this.region.value;
        if (seminar.region == "") {
            alert("지역을 선택하세요.");
            return false;
        }
        seminar.pos = "";
        for (let input of this.pos) {
            if (input.checked) {
                if (seminar.pos == "")
                    seminar.pos = input.nextElementSibling.textContent;
                else seminar.pos += ", " + input.nextElementSibling.textContent;
            }
        }
        if (seminar.pos == "") {
            alert("직책을 1개 이상 선택하세요.");
            return false;
        }

        let path = this.path.textContent;
        path = path == "파일첨부" ? "" : path.split("\\");
        seminar.file = path[path.length - 1];
        seminarList.add(seminar);

        this.newEdit();

        alert("등록 완료");
    }
    onChangeFile(e) {
        this.path.textContent = browse.value;
    }
    onClick(e) {
        let seminar;
        let idx = e.target?.parentElement?.parentElement?.rowIndex - 1;
        switch (e.target.className) {
            case "submit":
                e.preventDefault();
                this.submit();
                break;
            case "ico-down":
                e.preventDefault();
                seminar = seminarList.getSeminar(idx);
                alert(`${seminar.file} 파일 다운로드 버튼`);
                break;
            case "ico-trash":
                e.preventDefault();
                seminar = seminarList.getSeminar(idx);
                if (confirm(`${seminar.title} 세미나를 삭제하시겠습니까?`)) {
                    seminarList.remove(idx);
                }
                break;
        }
    }
}

// starting point
let seminarList = new ListManager();
let edit = new EditManager();
