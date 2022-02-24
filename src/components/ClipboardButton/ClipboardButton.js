import React from 'react';
import { toast } from 'react-toastify';
import { FieldTooltip } from '../FieldTooltip';

const ClipboardButton = ({ bountyId, ...props }) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`PRHunter bounty: ${bountyId}`);
    toast.success('Bounty ID copied!');
  };

  return (
    <button
      className="blank-btn text-hit-gray btn-sm"
      onClick={copyToClipboard}
    >
      {props?.tooltip ? (
        <FieldTooltip
          icon="fa fa-clipboard text-primary mr-4"
          text={props.tooltip}
        />
      ) : (
        <i className="fa fa-clipboard text-primary pr-4"></i>
      )}
      Copy PR ID to clipboard
    </button>
  );
};

export default ClipboardButton;
