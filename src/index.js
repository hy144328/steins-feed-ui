import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<p>Hello Vera</p>)

const sidenav = ReactDOM.createRoot(document.getElementById("sidenav"));
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
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="tag" value={tag_it} id={"sidenav-tag-" + tag_it} />
                    <label class="form-check-label" for={"sidenav-tag-" + tag_it}>
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

sidenav.render(
    <form>
        <TagsNav />
    </form>
);
