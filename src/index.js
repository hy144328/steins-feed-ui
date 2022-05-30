import React from "react";
import ReactDOM from "react-dom/client";

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
                <label>
                    <input type="checkbox" name="tag" value={tag_it} />
                    {tag_it}
                </label>
            );
            tag_cmpnts.push(<br />);
        }
        tag_cmpnts.pop();

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
