import { OverlayTrigger, Tooltip } from 'react-bootstrap';

export const FieldTooltip = ({ icon, text }) => {
  const className = `ml-1 fas ${icon}`;

  return (
    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{text}</Tooltip>}>
      <i className={className} data-toggle="tooltip" />
    </OverlayTrigger>
  );
};
