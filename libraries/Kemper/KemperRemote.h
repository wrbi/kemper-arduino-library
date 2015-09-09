
#pragma once

#include "AbstractKemper.h"
#include <ExpressionPedal.h>

#include "Utils.h"
#include <EEPROM.h>

BEGIN_KEMPER_NAMESPACE

	
#define SWITCH_RIG_START 0
#define SWITCH_STOMP_START 5
#define SWITCH_STOMP_COUNT 4
#define SWITCH_RIG_COUNT 5
#define SWITCH_TAP 9
#define SWITCH_TUNER 10
#define SWITCH_LOOPER 11
#define SWITCH_UP 12
#define SWITCH_DOWN 13
#define SWITCH_COUNT 14

#define REMOTE_STATE_NORMAL 1
#define REMOTE_STATE_STOMP_ASSIGN 2
#define REMOTE_STATE_RIG_ASSIGN 3
#define REMOTE_STATE_LOOPER 4
#define REMOTE_STATE_TEMPO_DETECTION 5
#define REMOTE_STATE_EXPRESSION_CALIBRATE 6
#define REMOTE_STATE_STOMP_PARAMETER 7

#define LOOPER_STATE_NONE     0
#define LOOPER_STATE_RECORD   1
#define LOOPER_STATE_PLAYBACK 2
#define LED_COUNT 29

#define PERFORM_SLOT_COUNT 5 

#define EXPRESSION_PEDAL_COUNT 1

extern int ExpressionPedalModes[3];

struct KemperRemoteState
{
	int state;
	int previousState;
	byte currentPage;
	byte currentPerformance;
	byte currentSlot;
	bool isSaved;
	int parameterState;
};


class KemperRemote
{
private:
	byte currentRig;
	byte stompAssignment[RIG_COUNT][SWITCH_STOMP_COUNT];
	byte stompAssignmentPerform[RIG_COUNT][PERFORM_SLOT_COUNT][SWITCH_STOMP_COUNT];

	int currentSwitch;
	bool switchStates[SWITCH_COUNT];
	unsigned long switchDownStart;
	bool initialStompStates[KEMPER_STOMP_COUNT];
	bool changedStomps[KEMPER_STOMP_COUNT];
	byte rigAssignRig;

	byte rigMap[RIG_COUNT];

	void refreshStompAssignment();
	void checkSwitchDownLong();
	void checkUpDownScroll();
	void checkStompChanges();
	void updateLeds();
public:

	ExpressionPedal expPedals[EXPRESSION_PEDAL_COUNT];
	int calibratePedalId;

	byte leds[LED_COUNT * 3];
	byte rigAssignSwitch;
	byte currentStompAssignment[SWITCH_STOMP_COUNT];
	int looperState;
	KemperRemoteState state;
	
	AbstractKemper* kemper;
	KemperRemote(AbstractKemper* _kemper); 
	void read();

	void onSwitchDown(int sw);
	void onSwitchUp(int sw);

	void onStompDown(int switchIdx);
	void onStompUp(int switchIdx);
	void onRigDown(int switchIdx);
	void onRigUp(int switchIdx);

	void assignStomps(byte switchId, byte assign);
	void assignRig(byte switchId, byte rig);

	byte getRigIndex(byte rig);

	void save();
};

END_KEMPER_NAMESPACE