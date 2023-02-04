const style = `
#selectionPopoverTool {
  display: flex;
  gap: 10px;
  margin: 0;
  padding: 6px 10px;
  list-style: none;
  position: absolute;
  z-index: 99999;
  background-color: #444;
  border-radius: 2px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
}
#selectionPopoverTool:after {
  display: block;
  content: '';
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid #444;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
}
#selectionPopoverTool li {
  padding: 2px;
  font-size: 12px;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
}
#selectionPopoverTool li:hover {
  background-color: #656565;
}
#selectionPopoverTool li img {
  border-radius: 50%;
  overflow: hidden;
}
`

export default style