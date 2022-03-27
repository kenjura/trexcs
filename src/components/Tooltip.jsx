import './Tooltip.scss';

export default function Tooltip({ children, text }) {
	return (
	<div className="tooltip">
		{children}
		<div className="tooltip-content">{text}</div>
	</div>
	);
}