import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../context";
import Tag from "../components/Tag";

const Task = ({ id, index, tagText, title }) => {
  const {
    tags,
    clearTextInputBeForTagName,
    deleteTask,
    editTask,
    editingMode,
    editText,
    setEditText,
    updateTask,
  } = useContext(Context);
  const toggleTitleLine = (e) => {
    if (e.target) {
      e.target.classList.toggle("strike");
    }
  };

  return (
    <div className="task">
      <Tag tagText={tagText} />
      {editingMode === id ? (
        <>
          <div className="edit-text-wrapper">
            <input
              onChange={(e) => setEditText(e.target.value)}
              type="text"
              value={editText}
            />
            <div className="tag-edit-mode-wrapper">
							<div className="tag-edit-mode">{clearTextInputBeForTagName()}</div>
							{clearTextInputBeForTagName() ? (
								<>
									<ul className="ul-tags">
										{tags.map((el, idx) => (
											<li className="ul-li-tag" key={idx}>{el.tagName}</li>
										))}
									</ul>
								</>
							) : (
								<></>
							)}
						</div>
						</div>
          <button onClick={() => updateTask(id)} className="task-update-btn">
            update
          </button>
        </>
      ) : (
        <div onClick={toggleTitleLine} className="title">
          {title}
        </div>
      )}
      <div className="task-btns-wrapper">
        <button onClick={() => editTask(id, title)} className="task-edit-btn">
          Edit
        </button>
        <button onClick={() => deleteTask(index)} className="task-del-btn">
          Delete
        </button>
      </div>
    </div>
  );
};
Task.propTypes = {
  title: PropTypes.string.isRequired,
  tagText: PropTypes.string,
  index: PropTypes.number,
  id: PropTypes.number,
};

export default Task;
