import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
  VStack,
  Heading,
  HStack,
} from '@chakra-ui/react';
import Header from '../../components/Header';

const FormGroup = ({ label, children }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    {children}
  </FormControl>
);

const AdminPage = () => {
  const [currentTab, setCurrentTab] = useState('geral');

  const renderGeneralTab = () => (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg">Geral</Heading>
      <FormGroup label="Código">
        <Input type="text" id="codigo" name="codigo" maxLength="50" />
      </FormGroup>
      <FormGroup label="Nome">
        <Input type="text" id="nome" name="nome" maxLength="512" />
      </FormGroup>
      <FormGroup label="Descrição">
        <Textarea id="descricao" name="descricao" maxLength="1024" />
      </FormGroup>
      <FormGroup label="Área Responsável">
        <Select id="areaResponsavel" name="areaResponsavel">
          <option value="">Selecione a Área</option>
          {/* Adicione opções conforme necessário */}
        </Select>
      </FormGroup>
      <FormGroup label="Indicador Pai">
        <Select id="indicadorPai" name="indicadorPai">
          <option value="">Nenhum</option>
          {/* Adicione opções conforme necessário */}
        </Select>
      </FormGroup>
      <FormGroup label="Responsável pelo Indicador">
        <Input type="text" id="responsavelIndicador" name="responsavelIndicador" />
      </FormGroup>
      <FormGroup label="Administrador do Indicador">
        <Input type="text" id="administradorIndicador" name="administradorIndicador" />
      </FormGroup>
      <FormGroup label="Unidade de Medida">
        <Input type="text" id="unidadeMedida" name="unidadeMedida" maxLength="50" />
      </FormGroup>
      <FormGroup label="Posição UM">
        <Select id="posicaoUM" name="posicaoUM">
          <option value="antes">Antes (prefixo)</option>
          <option value="depois">Depois (sufixo)</option>
        </Select>
      </FormGroup>
      <FormGroup label="Quantidade de Casas Decimais">
        <Select id="casasDecimais" name="casasDecimais">
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </FormGroup>
      <Button colorScheme="red" background={'red.600'} onClick={() => setCurrentTab('metasMedicoes')}>Próximo</Button>
    </VStack>
  );

  const renderMetasMedicoesTab = () => (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg">Metas e Medições</Heading>
      <Heading as="h3" size="md">Metas</Heading>
      <FormGroup label="Tipo Indicador">
        <Select id="tipoIndicador" name="tipoIndicador">
          <option value="simples">Simples</option>
          <option value="formula">Fórmula</option>
          <option value="composicao">Composição</option>
        </Select>
      </FormGroup>
      <FormGroup label="Valor Mínimo">
        <Input type="text" id="valorMinimo" name="valorMinimo" />
      </FormGroup>
      <FormGroup label="Valor Máximo">
        <Input type="text" id="valorMaximo" name="valorMaximo" />
      </FormGroup>
      <FormGroup label="Descrição da Meta">
        <Textarea id="descricaoMeta" name="descricaoMeta" />
      </FormGroup>
      <FormGroup label="Tipo de Meta">
        <Select id="tipoMeta" name="tipoMeta">
          <option value="simples">Simples</option>
          <option value="entreFaixas">Entre Faixas</option>
          <option value="semMeta">Sem Meta (Composição)</option>
        </Select>
      </FormGroup>
      <FormGroup label="Frequência da Meta e Benchmark">
        <Select id="frequenciaMeta" name="frequenciaMeta">
          <option value="semanal">Semanal</option>
          <option value="quinzenal">Quinzenal</option>
          <option value="mensal">Mensal</option>
          <option value="bimestral">Bimestral</option>
          <option value="trimestral">Trimestral</option>
          <option value="semestral">Semestral</option>
          <option value="anual">Anual</option>
        </Select>
      </FormGroup>
      <FormGroup label="Desabilitar Benchmark?">
        <Select id="desabilitarBenchmark" name="desabilitarBenchmark">
          <option value="nao">Não</option>
          <option value="sim">Sim</option>
        </Select>
      </FormGroup>
      <Heading as="h3" size="md">Medições</Heading>
      <FormGroup label="Como medir">
        <Textarea id="comoMedir" name="comoMedir" />
      </FormGroup>
      <FormGroup label="Frequência do Valor Medido">
        <Select id="frequenciaValor" name="frequenciaValor">
          <option value="semanal">Semanal</option>
          <option value="quinzenal">Quinzenal</option>
          <option value="mensal">Mensal</option>
          <option value="bimestral">Bimestral</option>
          <option value="trimestral">Trimestral</option>
          <option value="semestral">Semestral</option>
          <option value="anual">Anual</option>
        </Select>
      </FormGroup>
      <FormGroup label="Dia Limite de Lançamento">
        <Select id="diaLimite" name="diaLimite">
          <option value="">Selecione</option>
          {/* Adicione outras opções conforme necessário */}
        </Select>
      </FormGroup>
      <FormGroup label="Dias de Tolerância">
        <Input type="text" id="diasTolerancia" name="diasTolerancia" />
      </FormGroup>
      <FormGroup label="Período análise">
        <Input type="text" id="periodoAnalise" name="periodoAnalise" />
      </FormGroup>
      <HStack spacing={4}>
        <Button colorScheme="red" background={'red.600'} onClick={() => setCurrentTab('geral')}>Anterior</Button>
        <Button colorScheme="red" background={'red.600'} onClick={() => setCurrentTab('desempenho')}>Próximo</Button>
      </HStack>
    </VStack>
  );

  const renderDesempenhoTab = () => (
    <VStack spacing={4} align="stretch">
      <Heading as="h2" size="lg">Desempenho</Heading>
      <FormGroup label="Tipo Acumulação">
        <Select id="tipoAcumulacao" name="tipoAcumulacao">
          <option value="">Selecione</option>
          <option value="saldo">Saldo</option>
          <option value="soma">Soma</option>
          <option value="media">Média</option>
        </Select>
      </FormGroup>
      <FormGroup label="Esquema de cores">
        <Select id="esquemaCores" name="esquemaCores">
          <option value="">Nenhum</option>
          {/* Adicione outras opções conforme necessário */}
        </Select>
      </FormGroup>
      <FormGroup label="Polaridade">
        <Select id="polaridade" name="polaridade">
          <option value="maiorMelhor">Maior melhor</option>
          <option value="menorMelhor">Menor melhor</option>
        </Select>
      </FormGroup>
      <HStack spacing={4}>
        <Button colorScheme="red" background={'red.600'} onClick={() => setCurrentTab('metasMedicoes')}>Anterior</Button>
        <Button colorScheme="red" background={'red.600'} type="submit">Salvar</Button>
      </HStack>
    </VStack>
  );

  return (
    <Header>
      <Box p={4}>
        <Tabs
          variant="enclosed"
          index={currentTab === 'geral' ? 0 : currentTab === 'metasMedicoes' ? 1 : 2}
          onChange={(index) => setCurrentTab(index === 0 ? 'geral' : index === 1 ? 'metasMedicoes' : 'desempenho')}
        >
          <TabList>
            <Tab
              sx={{
                _selected: {
                  color: 'red',
                  backgroundColor: '0',
                },
                _hover: {
                  backgroundColor: 'gray.300',
                  cursor: 'pointer',
                },
              }}
            >
              Geral
            </Tab>
            <Tab
              sx={{
                _selected: {
                  color: 'red',
                  backgroundColor: '0',
                },
                _hover: {
                  backgroundColor: 'gray.300',
                  cursor: 'pointer',
                },
              }}
            >
              Metas e Medições
            </Tab>
            <Tab
              sx={{
                _selected: {
                  color: 'red',
                  backgroundColor: '0',
                },
                _hover: {
                  backgroundColor: 'gray.300',
                  cursor: 'pointer',
                },
              }}
            >
              Desempenho
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>{renderGeneralTab()}</TabPanel>
            <TabPanel>{renderMetasMedicoesTab()}</TabPanel>
            <TabPanel>{renderDesempenhoTab()}</TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Header>
  );
};

export default AdminPage;



// import React, { useState } from 'react';
// import './AdminPage.css'; // Estilo específico para a página de administração
// import Header from '../../components/Header'

// const FormGroup = ({ label, children }) => (
//   <div className="formGroup">
//     <label>{label}</label>
//     {children}
//   </div>
// );

// const AdminPage = () => {
//   const [currentTab, setCurrentTab] = useState('geral');

//   const handleTabChange = (tab) => setCurrentTab(tab);

//   const renderGeneralTab = () => (
//     <div className="adminContent">
//       <h2>Geral</h2>
//       <form className="adminForm">
//         <FormGroup label="Código">
//           <input type="text" id="codigo" name="codigo" maxLength="50" />
//         </FormGroup>
//         <FormGroup label="Nome">
//           <input type="text" id="nome" name="nome" maxLength="512" />
//         </FormGroup>
//         <FormGroup label="Descrição">
//           <textarea id="descricao" name="descricao" maxLength="1024"></textarea>
//         </FormGroup>
//         <FormGroup label="Área Responsável">
//           <select id="areaResponsavel" name="areaResponsavel">
//             <option value="">Selecione a Área</option>
//             {/* Adicione opções conforme necessário */}
//           </select>
//         </FormGroup>
//         <FormGroup label="Indicador Pai">
//           <select id="indicadorPai" name="indicadorPai">
//             <option value="">Nenhum</option>
//             {/* Adicione opções conforme necessário */}
//           </select>
//         </FormGroup>
//         <FormGroup label="Responsável pelo Indicador">
//           <input type="text" id="responsavelIndicador" name="responsavelIndicador" />
//         </FormGroup>
//         <FormGroup label="Administrador do Indicador">
//           <input type="text" id="administradorIndicador" name="administradorIndicador" />
//         </FormGroup>
//         <FormGroup label="Unidade de Medida">
//           <input type="text" id="unidadeMedida" name="unidadeMedida" maxLength="50" />
//         </FormGroup>
//         <FormGroup label="Posição UM">
//           <select id="posicaoUM" name="posicaoUM">
//             <option value="antes">Antes (prefixo)</option>
//             <option value="depois">Depois (sufixo)</option>
//           </select>
//         </FormGroup>
//         <FormGroup label="Quantidade de Casas Decimais">
//           <select id="casasDecimais" name="casasDecimais">
//             <option value="0">0</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//           </select>
//         </FormGroup>
//         <div className="formActions">
//           <button type="button" onClick={() => handleTabChange('metasMedicoes')}>Próximo</button>
//         </div>
//       </form>
//     </div>
//   );

//   const renderMetasMedicoesTab = () => (
//     <div className="adminContent">
//       <h2>Metas e Medições</h2>
//       <form className="adminForm">
//         <div className="formRow">
//           <div className="formColumn">
//             <h3>Metas</h3>
//             <FormGroup label="Tipo Indicador">
//               <select id="tipoIndicador" name="tipoIndicador">
//                 <option value="simples">Simples</option>
//                 <option value="formula">Fórmula</option>
//                 <option value="composicao">Composição</option>
//               </select>
//             </FormGroup>
//             <FormGroup label="Valor Mínimo">
//               <input type="text" id="valorMinimo" name="valorMinimo" />
//             </FormGroup>
//             <FormGroup label="Valor Máximo">
//               <input type="text" id="valorMaximo" name="valorMaximo" />
//             </FormGroup>
//             <FormGroup label="Descrição da Meta">
//               <textarea id="descricaoMeta" name="descricaoMeta"></textarea>
//             </FormGroup>
//             <FormGroup label="Tipo de Meta">
//               <select id="tipoMeta" name="tipoMeta">
//                 <option value="simples">Simples</option>
//                 <option value="entreFaixas">Entre Faixas</option>
//                 <option value="semMeta">Sem Meta (Composição)</option>
//               </select>
//             </FormGroup>
//             <FormGroup label="Frequência da Meta e Benchmark">
//               <select id="frequenciaMeta" name="frequenciaMeta">
//                 <option value="semanal">Semanal</option>
//                 <option value="quinzenal">Quinzenal</option>
//                 <option value="mensal">Mensal</option>
//                 <option value="bimestral">Bimestral</option>
//                 <option value="trimestral">Trimestral</option>
//                 <option value="semestral">Semestral</option>
//                 <option value="anual">Anual</option>
//               </select>
//             </FormGroup>
//             <FormGroup label="Desabilitar Benchmark?">
//               <select id="desabilitarBenchmark" name="desabilitarBenchmark">
//                 <option value="nao">Não</option>
//                 <option value="sim">Sim</option>
//               </select>
//             </FormGroup>
//           </div>
//           <div className="formColumn">
//             <h3>Medições</h3>
//             <FormGroup label="Como medir">
//               <textarea id="comoMedir" name="comoMedir"></textarea>
//             </FormGroup>
//             <FormGroup label="Frequência do Valor Medido">
//               <select id="frequenciaValor" name="frequenciaValor">
//                 <option value="semanal">Semanal</option>
//                 <option value="quinzenal">Quinzenal</option>
//                 <option value="mensal">Mensal</option>
//                 <option value="bimestral">Bimestral</option>
//                 <option value="trimestral">Trimestral</option>
//                 <option value="semestral">Semestral</option>
//                 <option value="anual">Anual</option>
//               </select>
//             </FormGroup>
//             <FormGroup label="Dia Limite de Lançamento">
//               <select id="diaLimite" name="diaLimite">
//                 <option value="">Selecione</option>
//                 {/* Adicione outras opções conforme necessário */}
//               </select>
//             </FormGroup>
//             <FormGroup label="Dias de Tolerância">
//               <input type="text" id="diasTolerancia" name="diasTolerancia" />
//             </FormGroup>
//             <FormGroup label="Período análise">
//               <input type="text" id="periodoAnalise" name="periodoAnalise" />
//             </FormGroup>
//           </div>
//         </div>
//         <div className="formActions">
//           <button type="button" onClick={() => handleTabChange('geral')}>Anterior</button>
//           <button type="button" onClick={() => handleTabChange('desempenho')}>Próximo</button>
//         </div>
//       </form>
//     </div>
//   );

//   const renderDesempenhoTab = () => (
//     <div className="adminContent">
//       <h2>Desempenho</h2>
//       <form className="adminForm">
//         <FormGroup label="Tipo Acumulação">
//           <select id="tipoAcumulacao" name="tipoAcumulacao">
//             <option value="">Selecione</option>
//             <option value="saldo">Saldo</option>
//             <option value="soma">Soma</option>
//             <option value="media">Média</option>
//           </select>
//         </FormGroup>
//         <FormGroup label="Esquema de cores">
//           <select id="esquemaCores" name="esquemaCores">
//             <option value="">Nenhum</option>
//             {/* Adicione outras opções conforme necessário */}
//           </select>
//         </FormGroup>
//         <FormGroup label="Polaridade">
//           <select id="polaridade" name="polaridade">
//             <option value="maiorMelhor">Maior melhor</option>
//             <option value="menorMelhor">Menor melhor</option>
//           </select>
//         </FormGroup>
//         <div className="formActions">
//           <button type="button" onClick={() => handleTabChange('metasMedicoes')}>Anterior</button>
//           <button type="submit">Salvar</button>
//         </div>
//       </form>
//     </div>
//   );

//   const renderTabContent = () => {
//     switch (currentTab) {
//       case 'geral':
//         return renderGeneralTab();
//       case 'metasMedicoes':
//         return renderMetasMedicoesTab();
//       case 'desempenho':
//         return renderDesempenhoTab();
//       default:
//         return null;
//     }
//   };

//   return (
//     <Header> <div>
//       <div className="tabs">
//         <button className={`tab ${currentTab === 'geral' ? 'active' : ''}`} onClick={() => handleTabChange('geral')}>Geral</button>
//         <button className={`tab ${currentTab === 'metasMedicoes' ? 'active' : ''}`} onClick={() => handleTabChange('metasMedicoes')}>Metas e Medições</button>
//         <button className={`tab ${currentTab === 'desempenho' ? 'active' : ''}`} onClick={() => handleTabChange('desempenho')}>Desempenho</button>
//       </div>
//       {renderTabContent()}
//     </div>
//     </Header>
//   );
// };

// export default AdminPage;

