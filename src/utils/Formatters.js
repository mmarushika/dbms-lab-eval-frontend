export function formatTimestamp(timestamp) {
    let dateTime = new Date(timestamp)
    const options = {
        year: 'numeric',   
        month: 'short',    
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,     
    };
    const formattedDate = dateTime.toLocaleString('en-US', options);
    return formattedDate;
}
