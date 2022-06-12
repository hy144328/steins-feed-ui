import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<p>Hello Vera</p>)

const sidenav = ReactDOM.createRoot(document.getElementById("sidenav"));

// Tags.
const ls_tags = [
    "activism",
    "business",
    "cambridge"
];

class TagsNav extends React.Component {
    render() {
        const tag_cmpnts = [];
        for (const tag_it of ls_tags) {
            tag_cmpnts.push(
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="tag" value={tag_it} id={"sidenav-tag-" + tag_it} />
                    <label className="form-check-label" htmlFor={"sidenav-tag-" + tag_it}>
                        {tag_it}
                    </label>
                </div>
            );
        }

        const fieldset_cmpnt = (
            <fieldset id="input_tag">
                <legend>Tags</legend>
                {tag_cmpnts}
            </fieldset>
        );

        return fieldset_cmpnt;
    }
}

// Languages.
const ls_langs = [
    "English",
    "German"
];

class LangsNav extends React.Component {
    render() {
        const lang_cmpnts = [];
        for (const lang_it of ls_langs) {
            lang_cmpnts.push(
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" name="lang" value={lang_it} id={"sidenav-lang-" + lang_it} />
                    <label className="form-check-label" htmlFor={"sidenav-lang-" + lang_it}>
                        {lang_it}
                    </label>
                </div>
            );
        }

        const fieldset_cmpnt = (
            <fieldset id="input_lang">
                <legend>Langs</legend>
                {lang_cmpnts}
            </fieldset>
        );

        return fieldset_cmpnt;
    }
}

sidenav.render(
    <form>
        <TagsNav />
        <LangsNav />
    </form>
);
