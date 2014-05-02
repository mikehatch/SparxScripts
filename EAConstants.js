 EA = {
		
	/*
	 * Script Name: EAConstants.js
	 * Author: Mike Hatch - take from the Sparx constants file, but modified to not pollute the JavaScript globals namespace
	 * Purpose: Provides constant values for the Enterprise Architect automation API. 
	 * Date: 2010-05-31
	 * Modified: 2014-04-23
	 * By: Mike Hatch - mike.hatch@outlook.com
	 */

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// ObjectType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/objecttypeenum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 otNone 					: 0,
	 otProject 					: 1,
	 otRepository 					: 2,
	 otCollection 					: 3,
	 otElement 					: 4,
	 otPackage 					: 5,
	 otModel 					: 6,
	 otConnector 					: 7,
	 otDiagram 					: 8,
	 otRequirement 					: 9,
	 otScenario 					: 10,
	 otConstraint 					: 11,
	 otTaggedValue 					: 12,
	 otFile 					: 13,
	 otEffort 					: 14,
	 otMetric 					: 15,
	 otIssue 					: 16,
	 otRisk 					: 17,
	 otTest 					: 18,
	 otDiagramObject 				: 19,
	 otDiagramLink 					: 20,
	 otResource 					: 21,
	 otConnectorEnd 				: 22,
	 otAttribute 					: 23,
	 otMethod 					: 24,
	 otParameter 					: 25,
	 otClient 					: 26,
	 otAuthor 					: 27,
	 otDatatype 					: 28,
	 otStereotype 					: 29,
	 otTask 					: 30,
	 otTerm 					: 31,
	 otProjectIssues 				: 32,
	 otAttributeConstraint 				: 33,
	 otAttributeTag 				: 34,
	 otMethodConstraint 				: 35,
	 otMethodTag 					: 36,
	 otConnectorConstrain	 			: 37,
	 otConnectorTag 				: 38,
	 otProjectResource 				: 39,
	 otReference 					: 40,
	 otRoleTag					: 41,
	 otCustomProperty 				: 42,
	 otPartition 					: 43,
	 otTransition 					: 44,
	 otEventProperty 				: 45,
	 otEventProperties 				: 46,
	 otPropertyType 				: 47,
	 otProperties 					: 48,
	 otProperty 					: 49,
	 otSwimlaneDef 					: 50,
	 otSwimlanes 					: 51,
	 otSwimlane 					: 52,
	 otModelWatcher 				: 53,
	 otScenarioStep 				: 54,
	 otScenarioExtension 				: 55,
	 otParamTag					: 56,
		otProjectRole				: 57,
	 otDocumentGenerator				: 58,
	 otMailInterface				: 59,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// MDGMenus
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/mdgmenusenum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 mgMerge 					: 1,
	 mgBuildProject 				: 2,
	 mgRun 						: 4,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EnumXMIType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/xmitypeenum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 xmiEADefault 					: 0,
	 xmiRoseDefault 				: 1,
	 xmiEA10 					: 2,
	 xmiEA11 					: 3,
	 xmiEA12 					: 4,
	 xmiRose10 					: 5,
	 xmiRose11 					: 6,
	 xmiRose12 					: 7,
	 xmiMOF13 					: 8,
	 xmiMOF14 					: 9,
	 xmiEA20 					: 10,
	 xmiEA21 					: 11,
	 xmiEA211 					: 12,
	 xmiEA212 					: 13,
	 xmiEA22					: 14,
	 xmiEA23					: 15,
	 xmiEA24					: 16,
	 xmiEA241				    	: 17,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EnumMVErrorType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/project_2.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 mvError 					: 0,
	 mvWarning 					: 1,
	 mvInformation 					: 2,
	 mvErrorCritical 				: 3,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// CreateModelType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/createmodelitype_enum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 cmEAPFromBase 					: 0,
	 cmEAPFromSQLRepository 			: 1,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EAEditionTypes
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/eaeditiontypes_enum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 piLite 					: -1,
	 piDesktop 					: 0,
	 piProfessional 				: 1,
	 piCorporate 					: 2,
	 piBusiness 					: 3,
	 piSystemEng 					: 4,
	 piUltimate 					: 5,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// ScenarioStepType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/scenariosteptype.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 stSystem 					: 0,
	 stActor 					: 1,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// ExportPackageXMIFlag
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/exportpackagexmiflag.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 epSaveToStub					: 1,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// CreateBaselineFlag
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/createbaselineflag.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 cbSaveToStub					: 1,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EnumScenarioDiagramType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/project_2.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 sdActivity 					: 0,
	 sdActivityWithActivityParameter		: 1,
	 sdActivityWithAction				: 2,
	 sdActivityhWithActionPin 			: 3,
	 sdRuleFlow					: 4,
	 sdState					: 5,
	 sdSequence					: 6,
	 sdRobustness					: 7,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EnumScenarioTestType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/project_2.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 stInternal					: 0,
	 stExternal					: 1,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EnumCodeSection
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 cpWhole 					: 0,
	 cpNotes 					: 1,
	 cpText 					: 2,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EnumRelationSetType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/enumrelationsettypeenum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 rsGeneralizeStart				: 0,
	 rsGeneralizeEnd				: 1,
	 rsRealizeStart					: 2,
	 rsRealizeEnd					: 3,
	 rsDependStart					: 4,
	 rsDependEnd					: 5,
	 rsParents					: 6,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// EnumCodeElementType
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 ctInvalid					: 0,
	 ctNamespace					: 1,
	 ctClass					: 2,
	 ctAttribute					: 3,
	 ctOperation					: 4,
	 ctOperationParam				: 5,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// PropType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/proptype_enum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 ptString					: 0,
	 ptInteger					: 1,
	 ptFloatingPoint				: 2,
	 ptBoolean					: 3,
	 ptEnum						: 4,
	 ptArray					: 5,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// SwimlaneOrientationType
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 soVertical					: 0,
	 soHorizontal					: 1,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// ReloadType
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/reloadtype_enum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 rtNone						: 0,
	 rtEntireModel					: 1,
	 rtPackage					: 2,
	 rtElement					: 3,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// ConstLayoutStyles
	// See http://www.sparxsystems.com/uml_tool_guide/sdk_for_enterprise_architect/constlayoutstylesenum.htm
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 lsDiagramDefault				: 0x00000000,
	 lsProgramDefault				: 0xFFFFFFFF,
	 lsCycleRemoveGreedy				: 0x80000000,
	 lsCycleRemoveDFS				: 0x40000000,
	 lsLayeringLongestPathSink			: 0x30000000,
	 lsLayeringLongestPathSource			: 0x20000000,
	 lsLayeringOptimalLinkLength			: 0x10000000,
	 lsInitializeNaive				: 0x08000000,
	 lsInitializeDFSOut				: 0x04000000,
	 lsInitializeDFSIn				: 0x0C000000,
	 lsCrossReduceAggressive			: 0x02000000,
	 lsLayoutDirectionUp				: 0x00010000,
	 lsLayoutDirectionDown				: 0x00020000,
	 lsLayoutDirectionLeft				: 0x00040000,
	 lsLayoutDirectionRight				: 0x00080000,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// WorkFlowConstants
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 MaxWorkFlowUsers				: 50,
	 MaxWorkFlowItems				: 100,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// PromptType
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 promptOK					: 1,
	 promptYESNO					: 2,
	 promptYESNOCANCEL				: 3,
	 promptOKCANCEL					: 4,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// PromptResult
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 resultOK					: 1,
	 resultCancel					: 2,
	 resultYes					: 3,
	 resultNo					: 4,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// WorkFlowResult
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 WorkFlowSucceeded				: 1,
	 WorkFlowError					: 2,
	 WorkFlowExists					: 3,
	 WorkFlowNotFound				: 4,
	 WorkFlowLimitReached				: 5,
	 WorkFlowDenied					: 6,
	 WorkFlowPermitted				: 7,
	 WorkFlowIsMember				: 8,
	 WorkFlowIsNotMember				: 9,
	 WorkFlowBadParam				: 10,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// DocumentType
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 dtRTF						: 0,
	 dtHTML						: 1,
	 dtPDF						: 2,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// DocumentBreak
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 breakPage					: 0,
	 breakSection					: 1,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// TextAlignment
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 alignLeft 					: 0,
	 alignCenter 					: 1,
	 alignRight 					: 2,
	 alignJustify 					: 3,

	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	// MessageFlag
	// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
	 mfNone						: 0,
	 mfComplete 					: 1,
	 mfPurple 					: 2,
	 mfOrange 					: 3,
	 mfGreen 					: 4,
	 mfYellow 					: 5,
	 mfBlue 					: 6,
	 mfRed 						: 7
	
}
