import "./Dropdown.module.css";

function Dropdown({name, list, placeholder}) {
    return (
        <select required name={name}>
            {list.map(i => <option key={i} name={i} value={i}>{i}</option>)}
        </select>
    );
}

//<option className="gray" value="" disable selected>{placeholder}</option>

export default Dropdown;