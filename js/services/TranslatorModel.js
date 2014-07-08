/*global vraioufauxApp */
'use strict';


translator.factory('TranslatorModel', function($http) {

    return {
        get: function(callback) {
            $http({
                method: 'GET',
                url: 'i18n.js',
                cache: false
            }).success(function(data) {
                if (callback)
                    callback(data);

            });
        },

        getFile: function(file, callback) {
            $http({
                method: 'GET',
                url: file,
                cache: false
            }).success(function(data) {
                if (callback) {
                    var parsing = data.replace("var __I18N__ = ", "");
                    parsing = parsing.replace(";", "");
                    callback(parsing);
                }

            });
        },
        getFileReferent: function(file, callback) {
            $$http({
                method: 'GET',
                url: file,
                cache: false
            }).success(function(data) {
                if (callback) {

                    callback(data);
                }

            });
        },


        getLangInConfFile: function(callback) {
            $http({
                method: 'GET',
                url: 'languages.json',
                cache: false
            }).success(function(data) {
                if (callback)
                    callback(data);

            });
        },

        getLangInConfFileReferent: function(callback) {
            $http({
                method: 'GET',
                url: 'languagesReferent.json',
                cache: false
            }).success(function(data) {
                if (callback)
                    callback(data);

            });
        },

        putNewLangInConfFile: function(lang, callback) {
            $http({
                method: 'GET',
                url: 'addLanguage.php?language=' + lang,
                cache: false
            }).success(function(data) {
                if (callback)
                    callback(data);

            });
        },
        putNewLangInConfFileReferent: function(lang, callback) {
            $http({
                method: 'GET',
                url: 'addLanguageReferent.php?language=' + lang,
                cache: false
            }).success(function(data) {
                if (callback)
                    callback(data);

            });
        },

        saveFile18n: function(lang, data, reload) {
            $http({
                method: 'GET',
                url: 'saveFile.php?language=' + lang + "&data=" + data,
                cache: false
            }).success(function(data) {

                if (reload)
                    window.location.reload();

            });
        },
        saveFile18nReferent: function(lang, data, reload) {
            $http({
                method: 'GET',
                url: 'saveFileReferent.php?language=' + lang + "&data=" + data,
                cache: false
            }).success(function(data) {

                if (reload)
                    window.location.reload();

            });
        }

    };
});
