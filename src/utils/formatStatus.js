
export const formatStatus = status => {
  switch(status){
    case 'PENDING':
      return (
        <span className="text-hit-gray">{decapitalize(status)}</span>
      )
    case 'FAILED':
      return (
        <span className="text-danger">{decapitalize(status)}</span>
      )
    case 'ACTIVE':
      return (
        <span className="text-info">{decapitalize(status)}</span>
      )
    case 'COMPLETED':
      return (
        <span className="text-success">{decapitalize(status)}</span>
      )
    case 'EXPIRED':
      return (
        <span className="text-hit-gray">{decapitalize(status)}</span>
      )
  }
}


const decapitalize = (s) => {
  return s.toLowerCase() && s[0] + s.slice(1).toLowerCase()
}