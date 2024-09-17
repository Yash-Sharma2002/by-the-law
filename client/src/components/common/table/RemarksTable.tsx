import React from "react";
import { TiTick, TiTickOutline } from "react-icons/ti";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { ExcelContext } from "../../../context/ExcelContext";

export default function RemarksTable({
  head,
  body,
  hidden,
}: {
  head: string[];
  body: (string | number | boolean | undefined)[][];
  hidden?: number[];
}) {
  const {
    selected,
    setSelected,
    setColumnsHidden,
    setHeader,
    setSelectedData,
    selectedData,
  } = React.useContext(ExcelContext);

  const setVal = React.useRef(() => {});

  setVal.current = () => {
    setColumnsHidden(hidden || []);
    setHeader(head);
    setSelectedData([]);
  };

  function checkSelected(index: number) {
    return selected.includes(index) ? (
      <TiTick
        className="text-green-500 text-[1.3rem] cursor-pointer"
        onClick={() => handleSelect(index)}
      />
    ) : (
      <TiTickOutline
        className="text-green-500 text-[1.3rem] cursor-pointer"
        onClick={() => handleSelect(index)}
      />
    );
  }

  function handleSelect(index: number) {
    if (selected.includes(index)) {
      let idx = selected.filter((item: number) => item !== index);
      setSelected(idx);
      setSelectedData((prev: any) =>
        prev.filter((_: any, i: number) => i !== index)
      );
    } else {
      setSelected([...selected, index]);
      setSelectedData([...selectedData, body[index]]);
    }
  }

  function selectAll() {
    if (selected && selected.length === body.length) {
      setSelected([]);
      setSelectedData([]);
    } else {
      setSelected(body.map((_, index) => index));
      setSelectedData(body);
    }
  }

  React.useEffect(() => {
    setVal.current();
  }, []);

  return (
    <>
      <TableContainer className="max-h-[67vh] !overflow-y-auto new-scroll">
        <Table variant="simple" className="h-full">
          <Thead>
            <Tr>
              {selected && (
                <Th>
                  {selected.length === body.length ? (
                    <TiTick
                      className="text-green-500 text-[1.3rem] cursor-pointer"
                      onClick={selectAll}
                    />
                  ) : (
                    <TiTickOutline
                      className="text-green-500 text-[1.3rem] cursor-pointer"
                      onClick={selectAll}
                    />
                  )}
                </Th>
              )}
              {head.map((item, index) => (
                <Th key={index}>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {body.length === 0 ? (
              <Tr>
                <Td colSpan={head.length} textAlign="center">
                  No data found
                </Td>
              </Tr>
            ) : (
              body.map((item, idx) => (
                <Tr key={idx}>
                  {selected && (
                    <Td onClick={() => handleSelect(idx)}>
                      {checkSelected(idx)}
                    </Td>
                  )}

                  {item.map((subItem, index) => {
                    if (hidden && hidden.includes(index)) return null;
                    if (index === 2) {
                       return <Td key={index}>{subItem}</Td>;
                    } else if (index === 3) {
                      if (item[1] === 1)
                        return (
                          <Td key={index}>
                            <img
                              src={subItem as string}
                              alt={subItem as string}
                              className="h-10 w-10"
                            />
                          </Td>
                        );
                      else return <Td key={index}>{subItem}</Td>;
                    } else if (index === 4) {
                      if (item[1] === 2)
                        return (
                          <Td key={index}>
                            <video
                              src={subItem as string}
                              controls
                              className="h-10 w-10"
                            />
                          </Td>
                        );
                      else return null;
                    } else {
                      return <Td key={index}>{subItem}</Td>;
                    }
                  })}
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}