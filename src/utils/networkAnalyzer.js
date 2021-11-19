const networkAnalyzer = () => navigator.connection && navigator.connection.type !== "cellular"

export default networkAnalyzer
