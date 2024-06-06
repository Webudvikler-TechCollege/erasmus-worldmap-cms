export const Wrapper = ({ children, area }) => {
	return (
		<div $area={area}>
			{children}
		</div>
	)
}