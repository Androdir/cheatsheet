import Popup from 'reactjs-popup';
import React from 'react';

function Modal({ element, title, content }) {
	return (
		<Popup
			trigger={element}
			modal
			nested
			overlayStyle={{ background: "rgba(0, 0, 0, 0.5)" }}
		>
			{close => (
				<div className="modal">
					<button className="close" onClick={close}>
						&times;
					</button>
					<div className="header">{title}</div>
					<div className="content">
						{content}
					</div>
				</div>
			)}
		</Popup>
	);
};

export default Modal;
